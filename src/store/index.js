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

  
}

export const store = createStoreon([
  storeonDevtools,
  movieReviewsStore
])