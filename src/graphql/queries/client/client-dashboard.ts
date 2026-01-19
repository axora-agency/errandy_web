import { gql } from "@apollo/client";

export const GET_CLIENT_DASHBOARD = gql`
  query ClientDashboard {
    clientDashboard {
      activeErrandsCount
      draftErrandsCount
      totalErrandsCount
      completedErrandsCount
      totalSpent
      walletBalance
      marketTrends
      activeErrands {
        id
        title
        status
        createdAt
        updatedAt
        completionDeadline
        service {
          name
        }
      }
      draftErrands {
        id
        title
        status
        createdAt
        updatedAt
        service {
          name
        }
      }
    }
  }
`;
