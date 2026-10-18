import { useQuery } from "@apollo/client";
import { motion } from "framer-motion";
import { Briefcase, Wrench, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CATEGORY_TREE } from "@/graphql";
import { useOnBoardingStore } from "@/store/onBoardingStore";
import type { CategoryTreeQuery } from "@/gql/graphql";

const ServiceCategoryType = {
  CASUAL: "CASUAL",
  PROFESSIONAL: "PROFESSIONAL",
} as const;

export default function ServiceType() {
  const {
    selectedCategory,
    setSelectedCategory,
    toggleService,
    selectedServices,
    selectedServicesArray,
    selectedServicesCount,
  } = useOnBoardingStore();

  const isServiceSelected = (id: string) => Boolean(selectedServices?.[id]);

  const { data: categoryData, loading: categoryLoading } = useQuery<CategoryTreeQuery>(
    CATEGORY_TREE,
    { fetchPolicy: "cache-first" }
  );

  const categories = categoryData?.categoryTree || [];

  if (categoryLoading) {
    return (
      <div className="flex items-center justify-center min-h-64">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Choose Your Service Category</h1>
        <p className="text-muted-foreground">
          Select the type of services you offer, then choose specific skills
          within that category
        </p>
      </div>

      {/* Service Category Selection */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Casual Services */}
        <motion.div
          layout
          whileHover={{ scale: 1.02 }}
          onClick={() => setSelectedCategory(ServiceCategoryType.CASUAL)}
          className={`cursor-pointer transition-all ${
            selectedCategory === ServiceCategoryType.CASUAL
              ? "ring-2 ring-offset-2 ring-primary scale-[1.02]"
              : ""
          }`}
        >
          <Card className="relative overflow-hidden h-full">
            <div className="absolute -right-8 -top-8 opacity-10">
              <Wrench size={120} />
            </div>

            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <Wrench className="w-6 h-6 text-white" />
                </div>
                <div>
                  <CardTitle className="flex items-center gap-2">
                    Casual / Everyday Tasks
                    {selectedCategory === ServiceCategoryType.CASUAL && (
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                    )}
                  </CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm">
                General services, running errands, grocery shopping, pickups,
                and deliveries. Everyday assistance.
              </CardDescription>
            </CardContent>
          </Card>
        </motion.div>

        {/* Professional Services */}
        <motion.div
          layout
          whileHover={{ scale: 1.02 }}
          onClick={() => setSelectedCategory(ServiceCategoryType.PROFESSIONAL)}
          className={`cursor-pointer transition-all ${
            selectedCategory === ServiceCategoryType.PROFESSIONAL
              ? "ring-2 ring-offset-2 ring-primary scale-[1.02]"
              : ""
          }`}
        >
          <Card className="relative overflow-hidden h-full">
            <div className="absolute -right-8 -top-8 opacity-10">
              <Briefcase size={120} />
            </div>

            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div>
                  <CardTitle className="flex items-center gap-2">
                    Skilled / Professional Services
                    {selectedCategory === ServiceCategoryType.PROFESSIONAL && (
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                    )}
                  </CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm">
                Specialized tasks requiring technical skills, repairs, plumbing,
                electrical work, carpentry, and consulting.
              </CardDescription>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Categories & Skills Grid */}
      {selectedCategory && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-4"
        >
          <div className="text-center">
            <h2 className="text-2xl font-semibold">
              Select Specific Skills & Services
            </h2>
            <p className="text-muted-foreground">
              Choose all services you can provide ({selectedServicesCount}{" "}
              selected)
            </p>
          </div>

          <div className="grid gap-4">
            {categories.map((cat) => (
              <Card key={cat.id}>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{cat.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {/* Parent category button */}
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        variant={isServiceSelected(cat.name) ? "default" : "outline"}
                        className="w-full justify-start h-auto p-3 text-left"
                        onClick={() => toggleService(cat.name)}
                      >
                        <div className="flex items-center gap-2">
                          {isServiceSelected(cat.name) && (
                            <CheckCircle2 className="w-4 h-4 text-white" />
                          )}
                          <span className="truncate">{cat.name} (General)</span>
                        </div>
                      </Button>
                    </motion.div>

                    {/* Child categories */}
                    {cat.children?.map((child) => (
                      <motion.div
                        key={child.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          variant={isServiceSelected(child.name) ? "default" : "outline"}
                          className="w-full justify-start h-auto p-3 text-left"
                          onClick={() => toggleService(child.name)}
                        >
                          <div className="flex items-center gap-2">
                            {isServiceSelected(child.name) && (
                              <CheckCircle2 className="w-4 h-4 text-white" />
                            )}
                            <span className="truncate">{child.name}</span>
                          </div>
                        </Button>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Summary */}
          {selectedServicesArray.length > 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Selected Services Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      <strong>Services ({selectedServicesArray.length}):</strong>
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {selectedServicesArray.map((serviceName, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary"
                        >
                          {serviceName}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </motion.div>
      )}
    </div>
  );
}
