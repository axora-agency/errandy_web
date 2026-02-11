import { gql } from "@apollo/client";

export const GET_ERRAND_QUERY = gql`
  query Errand($errandId: ID!) {
    errand(input: { id: $errandId }) {
      id
      title
      status
      serviceAddress
      location
      providerType
      pricingType
      price
      hourlyRate
      transportAllowance
      materialsBudget
      description
      createdAt
      updatedAt
      completionDeadline
      clientId
      assignedTo
      isRecurring
      service {
        id
        name
      }
      client {
        id
        paymentMethods {
          verified
        }
        user {
          id
          name
          image
          username
          email
          createdAt
        }
      }
      ratings {
        id
        rating
        comment
        raterId
        rateeId
        rateeType
        createdAt
        reactions {
          id
          emoji
          userId
        }
        replies {
          id
          userId
          content
          createdAt
        }
      }
    }
  }
`;
