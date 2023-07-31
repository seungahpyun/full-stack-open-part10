import { gql } from "@apollo/client";

export const AUTHENTICATE = gql`
  mutation authorize($credentials: AuthorizeInput!) {
    authorize(credentials: $credentials) {
      accessToken
    }
  }
`;

export const CREATE_REVIEW = gql`
  mutation createReview($review: CreateReviewInput!) {
    createReview(review: $review) {
      id
      text
      rating
      createdAt
      repositoryId
      user {
        id
        username
      }
    }
  }
`;
