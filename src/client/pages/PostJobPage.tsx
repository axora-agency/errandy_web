import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client/react";
import {
  CATEGORY_TREE,
  MY_ADDRESSES,
  CREATE_ERRAND,
  PUBLISH_ERRAND,
} from "@/graphql";
import type {
  CategoryTreeQuery,
  MyAddressesQuery,
  CreateErrandMutation,
  CreateErrandMutationVariables,
  PublishErrandMutation,
  PublishErrandMutationVariables,
} from "@/gql/graphql";
import { useUserStore } from "@/store/userStore";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Button,
  Input,
  Textarea,
} from "@/components";
import { toast } from "sonner";

const PostJobPage = () => {
  const navigate = useNavigate();
  const { user } = useUserStore();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [addressId, setAddressId] = useState("");
  const [budgetNaira, setBudgetNaira] = useState("");

  const { data: catData } = useQuery<CategoryTreeQuery>(CATEGORY_TREE);
  const { data: addrData } = useQuery<MyAddressesQuery>(MY_ADDRESSES);

  const [createErrand, { loading: creating }] = useMutation<
    CreateErrandMutation,
    CreateErrandMutationVariables
  >(CREATE_ERRAND);

  const [publishErrand, { loading: publishing }] = useMutation<
    PublishErrandMutation,
    PublishErrandMutationVariables
  >(PUBLISH_ERRAND);

  const categories = (catData?.categoryTree || []).flatMap((node) =>
    node.children?.length ? node.children : [node]
  );
  const addresses = addrData?.myAddresses || [];

  const handleSubmit = async (publishImmediately: boolean) => {
    if (!title.trim() || !description.trim()) {
      toast.error("Please enter a title and description");
      return;
    }
    const selectedCategory = categoryId || categories[0]?.id || "general";
    const selectedAddress = addressId || addresses[0]?.id || "default";
    const amountMinorUnits = Math.round((Number(budgetNaira) || 5000) * 100);

    try {
      const res = await createErrand({
        variables: {
          input: {
            title: title.trim(),
            description: description.trim(),
            categoryId: selectedCategory,
            addressId: selectedAddress,
            clientPartyId: user?.partyId || user?.id || "",
            budget: {
              amountMinorUnits,
              currency: "NGN",
            },
          },
        },
      });

      const createdId = res.data?.createErrand?.errandId;
      if (createdId && publishImmediately) {
        await publishErrand({ variables: { errandId: createdId } });
        toast.success("Errand created and published!");
      } else {
        toast.success("Errand saved as draft!");
      }

      navigate(createdId ? `/errand/${createdId}` : "/client/job-posts");
    } catch (err: any) {
      toast.error(err?.message || "Failed to create errand");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Post a New Errand</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium block mb-1">
              Errand Title
            </label>
            <Input
              placeholder="e.g., Grocery shopping and home delivery"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm font-medium block mb-1">Category</label>
            <select
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
            >
              <option value="">Select a category</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-sm font-medium block mb-1">Location</label>
            <select
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              value={addressId}
              onChange={(e) => setAddressId(e.target.value)}
            >
              <option value="">Select saved address</option>
              {addresses.map((addr) => (
                <option key={addr.id} value={addr.id}>
                  {addr.label} — {addr.street}, {addr.city}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-sm font-medium block mb-1">
              Budget (₦ NGN)
            </label>
            <Input
              type="number"
              placeholder="5000"
              value={budgetNaira}
              onChange={(e) => setBudgetNaira(e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm font-medium block mb-1">
              Detailed Description
            </label>
            <Textarea
              rows={5}
              placeholder="Provide clear instructions, requirements, and timing..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-end gap-3 pt-4">
            <Button
              variant="outline"
              disabled={creating || publishing}
              onClick={() => handleSubmit(false)}
            >
              Save as Draft
            </Button>
            <Button
              disabled={creating || publishing}
              onClick={() => handleSubmit(true)}
            >
              {creating || publishing ? "Publishing..." : "Publish Errand"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PostJobPage;