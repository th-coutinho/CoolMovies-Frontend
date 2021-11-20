import { useState, useEffect } from 'react';
import { useStoreon } from 'storeon/react';
import PubSub from 'pubsub-js';
import { FaStar, FaRegStar } from 'react-icons/fa';

export default function Score({ id, rating }) {
  const [ratingValue, setRatingValue] = useState(rating);
  const { editingId, hasChanges, dispatch } = useStoreon('editingId', 'hasChanges');
  const isEditing = editingId === id;

  const MAX_NUMBERS_OF_STARS = 5;

  const stars = [...Array(MAX_NUMBERS_OF_STARS)];

  const handleChange = (e) => {
    const value = parseInt(e.target.value);

    if (!hasChanges) dispatch('setHasChanges', true);
    setRatingValue(value);
    dispatch('setReviewEditionValues', { rating: value });
  };

  useEffect(() => {
    if (isEditing) {
      PubSub.subscribe('reset-fields', () => {
        setRatingValue(rating);
      });
    }
  });

  return (
    <div className="flex">

      { stars.map((e, index) => {
        const isStarFull = index + 1 <= ratingValue;
        const StarIcon = isStarFull ? FaStar : FaRegStar;
        const className = isEditing ? 'cursor-pointer text-blue-500 transform transition-transform duration-400 hover:scale-125' : 'text-yellow-500'

        return (
          <label key={index} className={className}>
            <StarIcon />
            <input className="hidden" onChange={isEditing ? handleChange : null} name="rating" type="radio" value={index + 1} />
          </label>)
      }) }

    </div>
  )
};
