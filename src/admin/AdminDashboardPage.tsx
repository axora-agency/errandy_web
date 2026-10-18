import { useState } from "react";
import { useQuery, useMutation } from "@apollo/client/react";
import {
  ALL_DISPUTES,
  RESOLVE_DISPUTE,
  REVIEW_VERIFICATION_STEP,
} from "@/graphql";
import type {
  AllDisputesQuery,
  AllDisputesQueryVariables,
  ResolveDisputeMutation,
  ResolveDisputeMutationVariables,
  ReviewVerificationStepMutation,
  ReviewVerificationStepMutationVariables,
} from "@/gql/graphql";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Button,
  Input,
  Textarea,
  Badge,
} from "@/components";
import { ShieldAlert, CheckCircle2, XCircle, UserCheck } from "lucide-react";
import { toast } from "sonner";

const AdminDashboardPage = () => {
  const [statusFilter, setStatusFilter] = useState<string>("");
  const [resolutionMap, setResolutionMap] = useState<Record<string, string>>({});
  const [targetPartyId, setTargetPartyId] = useState("");
  const [stepType, setStepType] = useState("NIN_VERIFIED");
  const [rejectionReason, setRejectionReason] = useState("");

  const {
    data: disputesData,
    loading: disputesLoading,
    refetch: refetchDisputes,
  } = useQuery<AllDisputesQuery, AllDisputesQueryVariables>(ALL_DISPUTES, {
    variables: {
      limit: 50,
      status: statusFilter || undefined,
    },
  });

  const [resolveDispute, { loading: resolving }] = useMutation<
    ResolveDisputeMutation,
    ResolveDisputeMutationVariables
  >(RESOLVE_DISPUTE, {
    onCompleted: () => {
      toast.success("Dispute updated!");
      refetchDisputes();
    },
    onError: (err) => toast.error(err.message),
  });

  const [reviewVerification, { loading: reviewing }] = useMutation<
    ReviewVerificationStepMutation,
    ReviewVerificationStepMutationVariables
  >(REVIEW_VERIFICATION_STEP, {
    onCompleted: () => {
      toast.success("Verification step reviewed!");
      setTargetPartyId("");
      setRejectionReason("");
    },
    onError: (err) => toast.error(err.message),
  });

  const disputes = disputesData?.allDisputes || [];

  const handleResolve = async (
    disputeId: string,
    status: "RESOLVED" | "REJECTED"
  ) => {
    const resolution =
      resolutionMap[disputeId]?.trim() ||
      (status === "RESOLVED"
        ? "Resolved by administrator"
        : "Rejected by administrator");

    await resolveDispute({
      variables: {
        input: {
          disputeId,
          status,
          resolution,
        },
      },
    });
  };

  const handleVerificationReview = async (status: "APPROVED" | "REJECTED") => {
    if (!targetPartyId.trim()) {
      toast.error("Enter a Party ID to review");
      return;
    }
    await reviewVerification({
      variables: {
        input: {
          partyId: targetPartyId.trim(),
          stepType,
          status,
          rejectionReason:
            status === "REJECTED" ? rejectionReason.trim() || "Rejected" : undefined,
        },
      },
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Admin Operations Console</h1>
        <p className="text-sm text-gray-500">
          Manage platform disputes and provider identity verification steps
        </p>
      </div>

      {/* Verification Review Panel */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <UserCheck className="h-5 w-5 text-blue-600" />
            Provider Verification Review
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-sm font-medium block mb-1">Party ID</label>
              <Input
                placeholder="Enter provider partyId..."
                value={targetPartyId}
                onChange={(e) => setTargetPartyId(e.target.value)}
              />
            </div>
            <div>
              <label className="text-sm font-medium block mb-1">
                Verification Step
              </label>
              <select
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                value={stepType}
                onChange={(e) => setStepType(e.target.value)}
              >
                <option value="NIN_VERIFIED">NIN Verification</option>
                <option value="LICENSE_VERIFIED">Professional License</option>
                <option value="BUSINESS_REG_VERIFIED">
                  CAC Business Registration
                </option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium block mb-1">
                Rejection Reason (if rejecting)
              </label>
              <Input
                placeholder="Optional reason..."
                value={rejectionReason}
                onChange={(e) => setRejectionReason(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button
              disabled={reviewing}
              onClick={() => handleVerificationReview("APPROVED")}
            >
              <CheckCircle2 className="h-4 w-4 mr-2" />
              Approve Step
            </Button>
            <Button
              variant="outline"
              disabled={reviewing}
              onClick={() => handleVerificationReview("REJECTED")}
            >
              <XCircle className="h-4 w-4 mr-2 text-red-500" />
              Reject Step
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Dispute Resolution Panel */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg flex items-center gap-2">
            <ShieldAlert className="h-5 w-5 text-amber-600" />
            Disputes Queue ({disputes.length})
          </CardTitle>
          <select
            className="rounded-md border border-input bg-background px-3 py-1.5 text-sm"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="">All Statuses</option>
            <option value="OPEN">OPEN</option>
            <option value="UNDER_REVIEW">UNDER_REVIEW</option>
            <option value="RESOLVED">RESOLVED</option>
            <option value="REJECTED">REJECTED</option>
          </select>
        </CardHeader>
        <CardContent>
          {disputesLoading ? (
            <p className="text-sm text-gray-500 py-8 text-center">
              Loading disputes...
            </p>
          ) : disputes.length === 0 ? (
            <p className="text-sm text-gray-500 py-8 text-center">
              No disputes found.
            </p>
          ) : (
            <div className="space-y-4">
              {disputes.map((dispute) => (
                <div
                  key={dispute.id}
                  className="p-4 border rounded-lg space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-sm">
                        Dispute #{dispute.id.slice(0, 8)} • Errand #
                        {dispute.errandId.slice(0, 8)}
                      </span>
                      <Badge variant="secondary">{dispute.status}</Badge>
                    </div>
                    <span className="text-xs text-gray-400">
                      {new Date(dispute.createdAt).toLocaleString()}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-amber-800">
                    Reason: {dispute.reason}
                  </p>
                  <p className="text-sm text-gray-700">{dispute.description}</p>
                  {dispute.resolution && (
                    <p className="text-xs text-green-700 bg-green-50 p-2 rounded">
                      Resolution: {dispute.resolution}
                    </p>
                  )}
                  {(dispute.status === "OPEN" ||
                    dispute.status === "UNDER_REVIEW") && (
                    <div className="space-y-2 pt-2 border-t">
                      <Textarea
                        rows={2}
                        placeholder="Enter resolution notes..."
                        value={resolutionMap[dispute.id] || ""}
                        onChange={(e) =>
                          setResolutionMap((prev) => ({
                            ...prev,
                            [dispute.id]: e.target.value,
                          }))
                        }
                      />
                      <div className="flex items-center gap-2">
                        <Button
                          size="sm"
                          disabled={resolving}
                          onClick={() => handleResolve(dispute.id, "RESOLVED")}
                        >
                          Resolve Dispute
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          disabled={resolving}
                          onClick={() => handleResolve(dispute.id, "REJECTED")}
                        >
                          Reject Dispute
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboardPage;
