import { gql } from '@apollo/client';

export const UPDATE_MOVIE_REVIEW_BY_ID = gql`
  mutation UpdateMovieReviewById($id: UUID!, $title: String!, $body: String!, $rating: Int!) {
    updateMovieReviewById(input: { id: $id, movieReviewPatch: { body: $body, title: $title, rating: $rating } }) {
      movieReview {
        id
      }
    }
  }
`;
