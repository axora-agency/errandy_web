import { useState } from "react";
import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import {
  type MyErrandsQuery,
  type MyErrandsQueryVariables,
} from "@/gql/graphql";
import { GET_MY_ERRANDS } from "@/graphql";
import { useUserStore } from "@/store/userStore";
import { CLIENT_TABS, PROVIDER_TABS } from "../config/myErrandsTabConfig";
import { ErrandCard, EmptyStateContent } from "../components";
import { Tabs, TabsList, TabsTrigger, TabsContent, Button } from "@/components";
import { Loader2, AlertCircle, Plus } from "lucide-react";

const ErrandsPage = () => {
  const navigate = useNavigate();
  const user = useUserStore((state) => state.user);
  const isProvider = user?.activeRole === "PROVIDER" || user?.activeRole === "WORKER";
  const tabs = isProvider ? PROVIDER_TABS : CLIENT_TABS;

  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const activeTab = tabs[activeTabIndex];

  const { data, loading, error, refetch } = useQuery<
    MyErrandsQuery,
    MyErrandsQueryVariables
  >(GET_MY_ERRANDS, {
    variables: {
      role: isProvider ? "PROVIDER" : "CLIENT",
      status: activeTab.status,
    },
    fetchPolicy: "cache-and-network",
  });

  const errands = data?.myErrands || [];

  const handleErrandPress = (errandId: string) => {
    navigate(`/errands/${errandId}`);
  };

  const handleCreateErrand = () => {
    navigate("/errands/create");
  };

  if (loading && !data) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <p className="text-muted-foreground">Loading your errands...</p>
      </div>
    );
  }

  if (error && !data) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
        <AlertCircle className="h-12 w-12 text-destructive" />
        <p className="text-lg font-semibold">Failed to load errands</p>
        <Button variant="outline" onClick={() => refetch()}>
          Try Again
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-6 px-4">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">My Errands</h1>
        <p className="text-muted-foreground mt-1">
          {isProvider
            ? "Manage your applications and active tasks"
            : "Create and track your errands"}
        </p>
      </div>

      <Tabs
        value={activeTabIndex.toString()}
        onValueChange={(value) => setActiveTabIndex(parseInt(value))}
        className="w-full"
      >
        <TabsList className="w-full justify-start mb-6 overflow-x-auto">
          {tabs.map((tab, index) => (
            <TabsTrigger key={tab.key} value={index.toString()}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {tabs.map((tab, index) => (
          <TabsContent key={tab.key} value={index.toString()}>
            {errands.length === 0 ? (
              <div className="py-12">
                <EmptyStateContent
                  isProvider={isProvider}
                  activeTab={tab.key}
                />
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {errands.map((errand) => (
                  <ErrandCard
                    key={errand.id}
                    errand={errand}
                    onPress={() => handleErrandPress(errand.id)}
                    isProvider={isProvider}
                  />
                ))}
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>

      {/* Floating Action Button for Clients */}
      {!isProvider && (
        <button
          onClick={handleCreateErrand}
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center"
          aria-label="Create errand"
        >
          <Plus className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default ErrandsPage;
export { ErrandsPage };
