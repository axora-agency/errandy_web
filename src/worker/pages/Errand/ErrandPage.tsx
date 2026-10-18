import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client/react";
import {
  GET_ERRAND_BY_ID,
  APPLICATIONS_BY_ERRAND,
  SUBMIT_APPLICATION,
  REQUEST_APPLICATION_ACCEPTANCE,
  REJECT_APPLICATION,
  PUBLISH_ERRAND,
  START_ERRAND,
  CONFIRM_ASSIGNMENT_COMPLETION,
  COMPLETE_ERRAND,
  SUBMIT_RATING,
  OPEN_DISPUTE,
} from "@/graphql";
import type {
  ErrandByIdQuery,
  ErrandByIdQueryVariables,
  ApplicationsByErrandQuery,
  ApplicationsByErrandQueryVariables,
  SubmitApplicationMutation,
  SubmitApplicationMutationVariables,
  RequestApplicationAcceptanceMutation,
  RequestApplicationAcceptanceMutationVariables,
  RejectApplicationMutation,
  RejectApplicationMutationVariables,
  PublishErrandMutation,
  PublishErrandMutationVariables,
  StartErrandMutation,
  StartErrandMutationVariables,
  ConfirmAssignmentCompletionMutation,
  ConfirmAssignmentCompletionMutationVariables,
  CompleteErrandMutation,
  CompleteErrandMutationVariables,
  SubmitRatingMutation,
  SubmitRatingMutationVariables,
  OpenDisputeMutation,
  OpenDisputeMutationVariables,
} from "@/gql/graphql";
import { useUserStore } from "@/store/userStore";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Badge,
  Button,
  Input,
  Textarea,
} from "@/components";
import { toast } from "sonner";
import {
  ArrowLeft,
  CheckCircle2,
  Clock,
  AlertTriangle,
  Star,
  Send,
  Play,
  ShieldCheck,
} from "lucide-react";

const ErrandPage = () => {
  const { errandId } = useParams<{ errandId: string }>();
  const navigate = useNavigate();
  const { user } = useUserStore();

  const [proposal, setProposal] = useState("");
  const [proposedAmountNaira, setProposedAmountNaira] = useState("");
  const [proofUrl, setProofUrl] = useState("");
  const [assignmentId, setAssignmentId] = useState("");
  const [ratingScore, setRatingScore] = useState(5);
  const [ratingComment, setRatingComment] = useState("");
  const [disputeReason, setDisputeReason] = useState("");
  const [disputeDescription, setDisputeDescription] = useState("");
  const [showDisputeForm, setShowDisputeForm] = useState(false);

  const partyId = user?.partyId || user?.id || "";

  const {
    data: errandData,
    loading: errandLoading,
    refetch: refetchErrand,
  } = useQuery<ErrandByIdQuery, ErrandByIdQueryVariables>(GET_ERRAND_BY_ID, {
    variables: { id: errandId || "" },
    skip: !errandId,
  });

  const {
    data: appsData,
    loading: appsLoading,
    refetch: refetchApps,
  } = useQuery<ApplicationsByErrandQuery, ApplicationsByErrandQueryVariables>(
    APPLICATIONS_BY_ERRAND,
    {
      variables: { errandId: errandId || "" },
      skip: !errandId,
    }
  );

  const [submitApplication, { loading: applying }] = useMutation<
    SubmitApplicationMutation,
    SubmitApplicationMutationVariables
  >(SUBMIT_APPLICATION, {
    onCompleted: () => {
      toast.success("Application submitted!");
      setProposal("");
      setProposedAmountNaira("");
      refetchApps();
    },
    onError: (err) => toast.error(err.message),
  });

  const [acceptApplication, { loading: accepting }] = useMutation<
    RequestApplicationAcceptanceMutation,
    RequestApplicationAcceptanceMutationVariables
  >(REQUEST_APPLICATION_ACCEPTANCE, {
    onCompleted: () => {
      toast.success("Application acceptance initiated!");
      refetchApps();
      refetchErrand();
    },
    onError: (err) => toast.error(err.message),
  });

  const [rejectApplication, { loading: rejecting }] = useMutation<
    RejectApplicationMutation,
    RejectApplicationMutationVariables
  >(REJECT_APPLICATION, {
    onCompleted: () => {
      toast.success("Application rejected");
      refetchApps();
    },
    onError: (err) => toast.error(err.message),
  });

  const [publishErrand, { loading: publishing }] = useMutation<
    PublishErrandMutation,
    PublishErrandMutationVariables
  >(PUBLISH_ERRAND, {
    onCompleted: () => {
      toast.success("Errand published!");
      refetchErrand();
    },
    onError: (err) => toast.error(err.message),
  });

  const [startErrand, { loading: starting }] = useMutation<
    StartErrandMutation,
    StartErrandMutationVariables
  >(START_ERRAND, {
    onCompleted: () => {
      toast.success("Errand started!");
      refetchErrand();
    },
    onError: (err) => toast.error(err.message),
  });

  const [confirmAssignment, { loading: confirmingAssignment }] = useMutation<
    ConfirmAssignmentCompletionMutation,
    ConfirmAssignmentCompletionMutationVariables
  >(CONFIRM_ASSIGNMENT_COMPLETION, {
    onCompleted: () => {
      toast.success("Assignment completion confirmed!");
      refetchErrand();
    },
    onError: (err) => toast.error(err.message),
  });

  const [completeErrand, { loading: completing }] = useMutation<
    CompleteErrandMutation,
    CompleteErrandMutationVariables
  >(COMPLETE_ERRAND, {
    onCompleted: () => {
      toast.success("Errand marked as completed & escrow released!");
      refetchErrand();
    },
    onError: (err) => toast.error(err.message),
  });

  const [submitRating, { loading: submittingRating }] = useMutation<
    SubmitRatingMutation,
    SubmitRatingMutationVariables
  >(SUBMIT_RATING, {
    onCompleted: () => {
      toast.success("Rating submitted!");
      setRatingComment("");
    },
    onError: (err) => toast.error(err.message),
  });

  const [openDispute, { loading: openingDispute }] = useMutation<
    OpenDisputeMutation,
    OpenDisputeMutationVariables
  >(OPEN_DISPUTE, {
    onCompleted: () => {
      toast.success("Dispute opened. Our team will review it shortly.");
      setShowDisputeForm(false);
      refetchErrand();
    },
    onError: (err) => toast.error(err.message),
  });

  if (errandLoading) {
    return (
      <div className="p-8 text-center text-gray-500">
        Loading errand details...
      </div>
    );
  }

  const errand = errandData?.errandById;
  if (!errand) {
    return (
      <div className="p-8 text-center">
        <p className="text-gray-600 mb-4">Errand not found.</p>
        <Button variant="outline" onClick={() => navigate(-1)}>
          Go Back
        </Button>
      </div>
    );
  }

  const isClientOwner = errand.clientPartyId === partyId;
  const applications = appsData?.applicationsByErrand || [];
  const acceptedApp = applications.find((a) => a.status === "ACCEPTED");
  const myApplication = applications.find((a) => a.providerPartyId === partyId);
  const budgetNaira = (errand.budget?.amountMinorUnits || 0) / 100;

  const handleApply = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!proposal.trim()) {
      toast.error("Please enter a proposal message");
      return;
    }
    const amountNaira = Number(proposedAmountNaira) || budgetNaira;
    await submitApplication({
      variables: {
        input: {
          errandId: errand.id,
          providerPartyId: partyId,
          proposal: proposal.trim(),
          proposedAmountMinorUnits: Math.round(amountNaira * 100),
          currency: errand.budget?.currency || "NGN",
        },
      },
    });
  };

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <Button variant="ghost" onClick={() => navigate(-1)}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="text-sm px-3 py-1">
            {errand.status}
          </Badge>
          {isClientOwner && errand.status === "DRAFT" && (
            <Button
              size="sm"
              disabled={publishing}
              onClick={() =>
                publishErrand({ variables: { errandId: errand.id } })
              }
            >
              {publishing ? "Publishing..." : "Publish Errand"}
            </Button>
          )}
        </div>
      </div>

      {/* Main Errand Details Card */}
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <CardTitle className="text-2xl">{errand.title}</CardTitle>
              <p className="text-sm text-gray-500 mt-1">
                Market: {errand.marketId} • Required Tier: {errand.requiredTier}
              </p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-green-600">
                ₦{budgetNaira.toLocaleString()}
              </div>
              <span className="text-xs text-gray-500">Escrow Protected</span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 whitespace-pre-wrap">
            {errand.description}
          </p>
          <div className="flex flex-wrap gap-4 text-xs text-gray-500 pt-2 border-t">
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              Posted {new Date(errand.createdAt).toLocaleDateString()}
            </span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="h-3.5 w-3.5 text-green-600" />
              Dual-Confirmation Escrow
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Execution & Dual-Confirmation Controls */}
      {(errand.status === "ASSIGNED" || errand.status === "IN_PROGRESS") && (
        <Card className="border-blue-200 bg-blue-50/30">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-blue-600" />
              Errand Execution & Dual Confirmation
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {!isClientOwner && errand.status === "ASSIGNED" && (
              <Button
                disabled={starting}
                onClick={() =>
                  startErrand({
                    variables: {
                      errandId: errand.id,
                      providerPartyId: partyId,
                    },
                  })
                }
              >
                <Play className="h-4 w-4 mr-2" />
                {starting ? "Starting..." : "Start Errand"}
              </Button>
            )}

            {!isClientOwner && errand.status === "IN_PROGRESS" && (
              <div className="space-y-3">
                <p className="text-sm text-gray-600">
                  Submit proof of completion to request client sign-off:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <Input
                    placeholder="Assignment ID (defaults to errand ID)"
                    value={assignmentId}
                    onChange={(e) => setAssignmentId(e.target.value)}
                  />
                  <Input
                    placeholder="Proof URL (photo/document link)"
                    value={proofUrl}
                    onChange={(e) => setProofUrl(e.target.value)}
                  />
                </div>
                <Button
                  disabled={confirmingAssignment}
                  onClick={() =>
                    confirmAssignment({
                      variables: {
                        errandAssignmentId: assignmentId.trim() || errand.id,
                        providerPartyId: partyId,
                        proofUrl: proofUrl.trim() || undefined,
                      },
                    })
                  }
                >
                  {confirmingAssignment
                    ? "Confirming..."
                    : "Confirm Provider Completion"}
                </Button>
              </div>
            )}

            {isClientOwner && (
              <div className="flex flex-wrap items-center gap-3">
                <Button
                  disabled={completing}
                  onClick={() =>
                    completeErrand({
                      variables: {
                        errandId: errand.id,
                        completedBy: "CLIENT",
                      },
                    })
                  }
                >
                  <CheckCircle2 className="h-4 w-4 mr-2" />
                  {completing
                    ? "Completing..."
                    : "Confirm Completion & Release Escrow"}
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setShowDisputeForm(!showDisputeForm)}
                >
                  <AlertTriangle className="h-4 w-4 mr-2 text-amber-600" />
                  Raise Dispute
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Provider Application Form */}
      {!isClientOwner && errand.status === "OPEN" && !myApplication && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Apply for this Errand</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleApply} className="space-y-4">
              <div>
                <label className="text-sm font-medium block mb-1">
                  Your Proposed Price (₦)
                </label>
                <Input
                  type="number"
                  placeholder={String(budgetNaira)}
                  value={proposedAmountNaira}
                  onChange={(e) => setProposedAmountNaira(e.target.value)}
                />
              </div>
              <div>
                <label className="text-sm font-medium block mb-1">
                  Proposal Message
                </label>
                <Textarea
                  rows={4}
                  placeholder="Describe why you're a great fit and how quickly you can complete this errand..."
                  value={proposal}
                  onChange={(e) => setProposal(e.target.value)}
                />
              </div>
              <Button type="submit" disabled={applying}>
                <Send className="h-4 w-4 mr-2" />
                {applying ? "Submitting..." : "Submit Application"}
              </Button>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Applications List */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">
            Applications ({applications.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          {appsLoading ? (
            <p className="text-sm text-gray-500">Loading applications...</p>
          ) : applications.length === 0 ? (
            <p className="text-sm text-gray-500">No applications yet.</p>
          ) : (
            <div className="space-y-4">
              {applications.map((app) => (
                <div
                  key={app.id}
                  className="p-4 rounded-lg border flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-sm">
                        Provider: {app.providerPartyId.slice(0, 8)}...
                      </span>
                      <Badge variant="outline">{app.status}</Badge>
                    </div>
                    <p className="text-sm text-gray-700">{app.proposal}</p>
                    <p className="text-xs text-gray-500">
                      Proposed: ₦
                      {(app.proposedAmountMinorUnits / 100).toLocaleString()}
                    </p>
                  </div>
                  {isClientOwner && app.status === "PENDING" && (
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        disabled={accepting}
                        onClick={() =>
                          acceptApplication({
                            variables: {
                              input: {
                                applicationId: app.id,
                                clientPartyId: partyId,
                                paymentMethodId: "PAYSTACK_DEFAULT",
                              },
                            },
                          })
                        }
                      >
                        Accept
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        disabled={rejecting}
                        onClick={() =>
                          rejectApplication({
                            variables: {
                              applicationId: app.id,
                              errandId: errand.id,
                            },
                          })
                        }
                      >
                        Reject
                      </Button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Rating Section when COMPLETED */}
      {errand.status === "COMPLETED" && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Star className="h-5 w-5 text-amber-500" />
              Leave a Rating
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRatingScore(star)}
                  className={`p-1 ${
                    star <= ratingScore ? "text-amber-500" : "text-gray-300"
                  }`}
                >
                  <Star className="h-6 w-6 fill-current" />
                </button>
              ))}
            </div>
            <Textarea
              placeholder="Share your experience..."
              value={ratingComment}
              onChange={(e) => setRatingComment(e.target.value)}
            />
            <Button
              disabled={submittingRating}
              onClick={() =>
                submitRating({
                  variables: {
                    input: {
                      errandId: errand.id,
                      rateePartyId: isClientOwner
                        ? acceptedApp?.providerPartyId || ""
                        : errand.clientPartyId,
                      score: ratingScore,
                      comment: ratingComment.trim() || undefined,
                    },
                  },
                })
              }
            >
              {submittingRating ? "Submitting..." : "Submit Review"}
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Dispute Form */}
      {showDisputeForm && (
        <Card className="border-amber-300">
          <CardHeader>
            <CardTitle className="text-lg text-amber-800">
              Open a Dispute
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Input
              placeholder="Reason (e.g. INCOMPLETE_WORK, QUALITY_ISSUE)"
              value={disputeReason}
              onChange={(e) => setDisputeReason(e.target.value)}
            />
            <Textarea
              placeholder="Describe the issue in detail..."
              value={disputeDescription}
              onChange={(e) => setDisputeDescription(e.target.value)}
            />
            <Button
              disabled={openingDispute || !disputeReason.trim()}
              onClick={() =>
                openDispute({
                  variables: {
                    input: {
                      errandId: errand.id,
                      providerPartyId:
                        acceptedApp?.providerPartyId || partyId,
                      reason: disputeReason.trim(),
                      description: disputeDescription.trim(),
                    },
                  },
                })
              }
            >
              {openingDispute ? "Submitting..." : "Submit Dispute"}
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export { ErrandPage };
