export const getSerializedMovieReview = (data) => {
  return data.allMovieReviews.nodes.map((movieReview) => {
    return {
        id: movieReview.id,
        title: movieReview.title,
        description: movieReview.body,
        rating: movieReview.rating,
        movie: movieReview.movieByMovieId.title,
        author: movieReview.movieByMovieId.userByUserCreatorId.name
      }
  });
};
