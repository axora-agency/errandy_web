import React from "react";
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
import { GET_SERVICES } from "@/graphql";
import { useServiceSelection, ServiceCategoryType } from "@/hooks";
import type {
  ServiceCategoriesQuery,
  ServiceCategoriesQueryVariables,
} from "@/gql/graphql";

export default function ServiceType() {
  const {
    selectedCategory,
    handleCategorySelect,
    handleServiceToggle,
    isServiceSelected,
    selectedServicesArray,
    selectedServicesCount,
  } = useServiceSelection();

  // Query for getting services based on category
  const {
    data: servicesData,
    loading: servicesLoading,
    refetch,
  } = useQuery<ServiceCategoriesQuery, ServiceCategoriesQueryVariables>(
    GET_SERVICES,
    {
      variables: {
        input: {
          type: selectedCategory || undefined,
        },
      },
      skip: !selectedCategory,
    }
  );

  // Refetch when category changes
  React.useEffect(() => {
    if (selectedCategory) {
      refetch({
        input: {
          type: selectedCategory,
        },
      });
    }
  }, [selectedCategory, refetch]);

  // Filter services based on selected category
  const getServicesForCategory = (category: ServiceCategoryType) => {
    if (!servicesData?.serviceCategories) return [];

    return servicesData.serviceCategories.filter(
      (serviceCategory) => serviceCategory.type === category
    );
  };

  const isLoading = servicesLoading;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-64">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Choose Your Service Type</h1>
        <p className="text-muted-foreground">
          Select the type of services you offer, then choose specific services
          within that category
        </p>
      </div>

      {/* Service Category Selection */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Casual Services */}
        <motion.div
          layout
          whileHover={{ scale: 1.02 }}
          onClick={() => handleCategorySelect(ServiceCategoryType.CASUAL)}
          className={`cursor-pointer transition-all ${
            selectedCategory === ServiceCategoryType.CASUAL
              ? "ring-2 ring-offset-2 ring-primary scale-[1.02]"
              : ""
          }`}
        >
          <Card className="relative overflow-hidden h-full">
            {/* Decorative background */}
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
                    Casual Services
                    {selectedCategory === ServiceCategoryType.CASUAL && (
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                    )}
                  </CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm">
                General services that don't require specialized certification or
                professional training. Perfect for everyday tasks and basic
                assistance.
              </CardDescription>
            </CardContent>
          </Card>
        </motion.div>

        {/* Professional Services */}
        <motion.div
          layout
          whileHover={{ scale: 1.02 }}
          onClick={() => handleCategorySelect(ServiceCategoryType.PROFESSIONAL)}
          className={`cursor-pointer transition-all ${
            selectedCategory === ServiceCategoryType.PROFESSIONAL
              ? "ring-2 ring-offset-2 ring-primary scale-[1.02]"
              : ""
          }`}
        >
          <Card className="relative overflow-hidden h-full">
            {/* Decorative background */}
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
                    Professional Services
                    {selectedCategory === ServiceCategoryType.PROFESSIONAL && (
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                    )}
                  </CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm">
                Specialized services requiring professional expertise,
                certification, or formal training. For skilled trades and
                professional consulting.
              </CardDescription>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Service Selection */}
      {selectedCategory && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-4"
        >
          <div className="text-center">
            <h2 className="text-2xl font-semibold">
              Select{" "}
              {selectedCategory === ServiceCategoryType.CASUAL
                ? "Casual"
                : "Professional"}{" "}
              Services
            </h2>
            <p className="text-muted-foreground">
              Choose all services you can provide ({selectedServicesCount}{" "}
              selected)
            </p>
          </div>

          <div className="grid gap-4">
            {getServicesForCategory(selectedCategory).map(
              (serviceGroup, groupIndex) => (
                <Card key={groupIndex}>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">
                      {serviceGroup.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {serviceGroup.services?.map((service) => (
                        <motion.div
                          key={service?.id}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button
                            variant={
                              isServiceSelected(service?.id || "")
                                ? "default"
                                : "outline"
                            }
                            className="w-full justify-start h-auto p-3 text-left"
                            onClick={() =>
                              handleServiceToggle(service?.id || "")
                            }
                          >
                            <div className="flex items-center gap-2">
                              {isServiceSelected(service?.id || "") && (
                                <CheckCircle2 className="w-4 h-4 text-white" />
                              )}
                              <span className="truncate">{service?.name}</span>
                            </div>
                          </Button>
                        </motion.div>
                      )) || []}
                    </div>
                  </CardContent>
                </Card>
              )
            )}
          </div>

          {/* Summary */}
          {selectedServicesArray.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-6"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    Selected Services Summary
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      <strong>Category:</strong> {selectedCategory}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>
                        Services ({selectedServicesArray.length}):
                      </strong>
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {selectedServicesArray.map((serviceId, index) => {
                        // Find the service name from the data
                        const allServices =
                          servicesData?.serviceCategories?.flatMap(
                            (cat) => cat.services
                          ) || [];
                        const service = allServices.find(
                          (service) => service?.id === serviceId
                        );
                        const serviceName = service?.name || serviceId;

                        return (
                          <span
                            key={index}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary"
                          >
                            {serviceName}
                          </span>
                        );
                      })}
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
