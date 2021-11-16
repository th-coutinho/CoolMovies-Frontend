import { useStoreon } from 'storeon/react';
import { useState } from 'react';
import { useQuery } from "@apollo/client";

import { ALL_MOVIE_REVIEWS } from 'operations/queries';
import { getSerializedMovieReview } from 'operations/serializers/movie_reviews';

// Components
import Score from './components/score';
import Author from './components/author';
import Text from './components/text';

export default function ExchangeRates() {
  const { error, loading, data } = useQuery(ALL_MOVIE_REVIEWS);

  if (data) {
    const movieReviews = getSerializedMovieReview(data);

    return movieReviews.map(({ title, description, rating, movie, author }) => {
      return (
        <div class="">
          <div class="max-w-lg px-8 py-8 rounded-md shadow-lg bg-white">
            <p class="mt-2 text-sm font-medium leading-5 text-gray-500">{ movie }</p>
            <p class="mt-6 font-semibold text-gray-800">{ title }</p>
            
            <div class="mt-2 space-y-1">
              <Text text={description} />
            </div>
            <div>
              <Author name={author} />
            </div>
          </div>
        </div>)
    });
    
    // return data.allMovieReviews.nodes.map(({ body, rating, movieByMovieId }) => (
    //   <div style={{ border: "1px solid black", margin: "10px" }} key={body}>
    //     <Score rating={rating} />
    //     <h3>{movieByMovieId.title}</h3>
    //     <p>by: {movieByMovieId.userByUserCreatorId.name}</p>
    //     <Text text={body} />
    //     <Author name={movieByMovieId.userByUserCreatorId.name} />
    //   </div>
    // ));

    // <div id="app" class="antialiased bg-gray-100 min-h-screen pt-8 pb-12">
    //   <div class="px-4 sm:px-6 lg:px-8">
    //     <div
    //       v-for="review in reviews"
    //       :key="review.id"
    //       class="max-w-lg px-8 py-8 rounded-md shadow-lg bg-white"
    //     >
          
    //     </div>
    //     <p class="mt-6 font-medium text-gray-500">
    //       Design by
    //       <a
    //         href="https://twitter.com/Ildiesign"
    //         rel="noreferrer noopener"
    //         target="_blank"
    //         class="underline hover:text-gray-600"
    //         >Ildiko Gaspar</a
    //       >, Founder of
    //       <br class="sm:hidden" />
    //       <a
    //         href="https://uidesigndaily.com/posts/sketch-help-center-accordion-list-panel-cards-search-day-1088"
    //         rel="noreferrer noopener"
    //         target="_blank"
    //         class="underline hover:text-gray-600"
    //         >UI Design Daily</a
    //       >
    //     </p>
    //   </div>
      
    // </div>
  }

  return (<div>nada</div>)
 
}
