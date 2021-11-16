import { gql } from '@apollo/client';

export const UPDATE_MOVIE_REVIEW_BY_ID = gql`
  mutation UpdateMovieReviewById($id: UUID!, $body: String!) {
    updateMovieReviewById(input: { id: $id, movieReviewPatch: { body: $body } }) {
      movieReview {
        id
      }
    }
  }
`;

// updateMovieReviewById(input: { id: "335f0ff2-7f96-413f-8d26-6224039356c4", movieReviewPatch: { body: "teste" } }) {
//   movieReview {
//     id
//   }
