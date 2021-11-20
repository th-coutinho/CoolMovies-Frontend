import { useStoreon } from 'storeon/react';
import { useQuery } from "@apollo/client";

import { ALL_MOVIE_REVIEWS } from 'operations/queries';
import { getSerializedMovieReview } from 'operations/serializers/movie_reviews';

// Components
import Score from './components/score';
import Movie from './components/movie';
import Author from './components/author';
import Title from './components/title';
import Text from './components/text';
import Actions from './components/actions';
import Skeleton from './components/skeleton';

export default function MovieReviewsList() {
  const { movieReviews, dispatch } = useStoreon('movieReviews');
  const { error, loading, data } = useQuery(ALL_MOVIE_REVIEWS, {
    onCompleted: (data) => {
      const serializedMovieReviews = getSerializedMovieReview(data);

      dispatch('setMovieReviews', serializedMovieReviews);
    }
  });

  if (data) {
    return movieReviews.map(({ id, title, description, rating, movie, author }) => {
      return (
        <div key={id} className="animate-fade-in">
          <div className="p-6 rounded-md shadow-lg bg-white">
            <div className="xs:h-96">
              <div className="flex flex-col">
                <div className="pl-2">
                  <Score id={id} rating={rating} />
                </div>
                <div className="mt-2">
                  <Movie id={id} movie={movie}/>
                </div>
                <div className="mt-2">
                  <Title id={id} title={title} />
                </div>
                <div className="mt-2 space-y-1 xs:h-60">
                  <Text id={id} text={description} />
                </div>
              </div>
            </div>
            <div className="mt-2">
              <Author name={author} />
            </div>
            <div className="flex items-center justify-end mt-6">
              <Actions id={id} title={title} body={description} rating={rating} movie={movie} />
            </div>
          </div>
        </div>)
    });
  }

  if (loading) return (<Skeleton/>);
  if (error) return (<div>Something wrong happened.</div>)
};
