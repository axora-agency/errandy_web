import { gql } from '@apollo/client';

export const ERRAND_CREATED_SUBSCRIPTION = gql`
  subscription ErrandCreated {
    errandCreated {
      errand {
        id
        title
        description
        pricingType
        price
        hourlyRate
        status
        workerType
        profession
        service
        serviceAddress
        latitude
        longitude
        createdAt
      }
      type
      userId
      distance
    }
  }
`;