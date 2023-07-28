import { gql } from "@apollo/client";

export const AUTHENTICATE = gql`
  mutation authorize($credentials: AuthorizeInput!) {
    authorize(credentials: $credentials) {
      accessToken
    }
  }
`;
