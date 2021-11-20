import { gql } from "@apollo/client";

export const ALL_MOVIE_REVIEWS = gql`
    query {
      allMovieReviews {
        nodes {
          id
          title
          body
          rating
          movieByMovieId {
            id
            title
            userByUserCreatorId {
              id
              name
            }
          }
          commentsByMovieReviewId {
            nodes {
              id
              title
              body
              userByUserId {
                id
                name
              }
            }
          }
        }
      }
    }
  `;
