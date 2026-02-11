import { gql } from "@apollo/client";

export const GET_CLIENT_DASHBOARD = gql`
  query ClientDashboard {
    clientDashboard {
      requirements {
        key
        title
        description
        requiredTo
        isCompleted
      }
      completedRequirementsCount
      totalRequirementsCount
      activeErrands {
        id
        title
        description
        status
        pricingType
        price
        hourlyRate
        serviceAddress
        service {
          id
          name
        }
        providerType
        createdAt
        updatedAt
        completionDeadline
      }
      activeErrandsCount
      draftErrands {
        id
        title
        description
        status
        pricingType
        price
        hourlyRate
        serviceAddress
        serviceId
        service {
          id
          name
        }
        providerType
        createdAt
        updatedAt
      }
      draftErrandsCount
      totalErrandsCount
      completedErrandsCount
      totalSpent
      walletBalance
      marketTrends
    }
  }
`;
