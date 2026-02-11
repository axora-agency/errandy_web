import { gql } from "@apollo/client";

export const GET_TRUSTED_CIRCLE = gql`
  query GetTrustedCircle {
    getTrustedCircle {
      id
      members {
        id
        provider {
          id
          userId
          tier
          tierUpdatedAt
          providerType
          user {
            id
            name
            email
            image
            createdAt
            emailVerified
            onboardingProgress
            updatedAt
          }
          activeAddress {
            id
            address
            label
          }
          services {
            id
            name
            category {
              id
              name
            }
          }
          rating {
            averageRating
            totalReviews
          }
        }
      }
    }
  }
`;
