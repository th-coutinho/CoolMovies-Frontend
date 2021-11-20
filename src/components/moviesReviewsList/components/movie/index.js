import { useState, useEffect } from 'react';
import { useStoreon } from 'storeon/react';
import PubSub from 'pubsub-js';

export default function Movie({ id, movie }) {
  const { editingId, hasChanges, dispatch} = useStoreon('editingId', 'hasChanges');
  const [movieValue, setMovieValue] = useState(movie);
  const isEditing = editingId === id;

  const handleChange = (e) => {
    const reviewMovie = e.target.value;
    if (!hasChanges) dispatch('setHasChanges', true);

    setMovieValue(reviewMovie);
  };

  const handleBlur = () => {
    dispatch('setReviewEditionValues', { movie: movieValue });
  };

  useEffect(() => {
    if (isEditing) {
      PubSub.subscribe('reset-fields', () => {
        setMovieValue(movie);
      });
    }
  });

  if (isEditing) {
    return(
      <div className="h-8 px-2 flex items-center rounded-lg border border-blue-500">
        <textarea
          className="h-6 overflow-hidden appearance-none w-full outline-none resize-none text-sm font-medium leading-5 text-blue-500 transition-opacity duration-400"
          onChange={handleChange}
          onBlur={handleBlur}
          value={movieValue}
          maxLength="34"
          spellCheck="false" />
      </div>)
  }

  return (<p className="h-6 px-2 break-words text-sm font-medium leading-5 text-gray-500">{ movie }</p>)
};
