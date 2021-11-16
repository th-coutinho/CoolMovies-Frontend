import { createStoreon } from 'storeon';
import { storeonDevtools } from 'storeon/devtools';
import { toast } from 'tailwind-toast';

// import { serializeMovieReview } from 'operations/serializers/movie_reviews';

const movieReviewsStore = (store) => {
  store.on('@init', () => (
    {
      movieReviews: []
    }
  ))

  store.on('setMovieReviews', ({ _ }, collection) => {
    return {
      movieReviews: collection
    }
    console.log('getting here')
    // const serializedMovieReviews = serializeMovieReview(collection);

    // return {
    //   movieReviews: serializedMovieReviews
    // }
  });
}

export const store = createStoreon([
  storeonDevtools,
  movieReviewsStore
])