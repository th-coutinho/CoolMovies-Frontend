import { useStoreon } from 'storeon/react';
import { useState } from 'react';
import { useQuery } from "@apollo/client";

import { ALL_MOVIE_REVIEWS } from 'operations/queries';
import { getSerializedMovieReview } from 'operations/serializers/movie_reviews';

// Components
import Score from './components/score';
import Author from './components/author';
import Text from './components/text';
import Actions from './components/actions'

export default function MovieReviewsList() {
  const { movieReviews, dispatch } = useStoreon('movieReviews');
  const { error, loading, data } = useQuery(ALL_MOVIE_REVIEWS, {
    onCompleted: (data) => {
      const serializedMovieReviews = getSerializedMovieReview(data);
      dispatch('setMovieReviews', serializedMovieReviews)
    }
  });

  if (data) {
    return movieReviews.map(({ title, description, rating, movie, author }) => {
      return (
        <div class="">
          <div class="max-w-lg px-8 py-8 rounded-md shadow-lg bg-white">
            <Score rating={rating} />
            <p class="mt-2 text-sm font-medium leading-5 text-gray-500">{ movie }</p>
            <p class="mt-6 font-semibold text-gray-800">{ title }</p>
            
            <div class="mt-2 space-y-1">
              <Text text={description} />
            </div>
            <div className="flex items-center justify-between mt-6">
              <Author name={author} />
              <Actions />
            </div>
          </div>
        </div>)
    });
  }

  return (<div>nada</div>)
 
}
