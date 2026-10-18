import { useState } from "react";
import { useQuery, useMutation } from "@apollo/client/react";
import { toast } from "sonner";
import { MY_TRUSTED_CIRCLE } from "@/graphql/query/party/searchProvidersByService.query.gql";
import { ADD_TRUSTED_MEMBER, REMOVE_TRUSTED_MEMBER } from "@/graphql/mutation/party/marketplace.mutation.gql";
import { Button, Input } from "@/components/ui";
import { Users, UserPlus, Trash2, ShieldCheck, Calendar } from "lucide-react";

export default function SavedWorkersPage() {
  const [memberIdInput, setMemberIdInput] = useState("");

  const { data, loading, refetch } = useQuery<any>(MY_TRUSTED_CIRCLE, {
    fetchPolicy: "cache-and-network",
  });

  const [addTrustedMember, { loading: adding }] = useMutation<any>(ADD_TRUSTED_MEMBER);
  const [removeTrustedMember, { loading: removing }] = useMutation<any>(REMOVE_TRUSTED_MEMBER);

  const circle = data?.myTrustedCircle;
  const members = circle?.members || [];

  const handleAddMember = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!memberIdInput.trim()) return;
    try {
      await addTrustedMember({
        variables: {
          input: {
            memberPartyId: memberIdInput.trim(),
            status: "ACTIVE",
          },
        },
      });
      toast.success("Member added to your Trusted Circle");
      setMemberIdInput("");
      refetch();
    } catch (err: any) {
      toast.error(err?.message || "Failed to add member");
    }
  };

  const handleRemoveMember = async (memberPartyId: string) => {
    try {
      await removeTrustedMember({
        variables: { memberPartyId },
      });
      toast.success("Member removed from your Trusted Circle");
      refetch();
    } catch (err: any) {
      toast.error(err?.message || "Failed to remove member");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Users className="w-6 h-6 text-primary" />
              Saved Workers & Trusted Circle
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Workers in your Trusted Circle receive priority access when you post private or circle-first errands.
            </p>
          </div>

          <form onSubmit={handleAddMember} className="flex items-center gap-2">
            <Input
              value={memberIdInput}
              onChange={(e) => setMemberIdInput(e.target.value)}
              placeholder="Enter Worker Party ID..."
              className="w-56"
            />
            <Button type="submit" disabled={adding || !memberIdInput.trim()}>
              <UserPlus className="w-4 h-4 mr-1.5" />
              {adding ? "Adding..." : "Add ID"}
            </Button>
          </form>
        </div>

        {loading ? (
          <div className="bg-white rounded-xl p-12 text-center text-slate-500 border border-slate-100">
            Loading your Trusted Circle...
          </div>
        ) : members.length === 0 ? (
          <div className="bg-white rounded-xl p-12 text-center border border-slate-100">
            <ShieldCheck className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-semibold text-slate-800">Your Trusted Circle is empty</h3>
            <p className="text-sm text-slate-500 mt-1 max-w-md mx-auto">
              Browse the Find Workers directory or add a worker by their Party ID to build your personal network of trusted providers.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {members.map((member: any) => (
              <div
                key={member.memberId}
                className="bg-white rounded-xl p-5 shadow-sm border border-slate-100 flex items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-900">Worker #{member.memberId.slice(0, 8)}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-medium">
                      {member.status || "ACTIVE"}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 font-mono">{member.memberId}</p>
                  {member.addedAt && (
                    <p className="text-xs text-slate-500 flex items-center gap-1 pt-1">
                      <Calendar className="w-3.5 h-3.5" />
                      Added {new Date(member.addedAt).toLocaleDateString()}
                    </p>
                  )}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  disabled={removing}
                  onClick={() => handleRemoveMember(member.memberId)}
                  className="text-red-600 border-red-200 hover:bg-red-50"
                >
                  <Trash2 className="w-4 h-4 mr-1" />
                  Remove
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}