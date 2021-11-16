import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_MOVIE_REVIEW_BY_ID } from 'operations/mutations/index';

export default function Text({ text }) {
  const [isEditing, setIsEditing] = useState(false);
  const [textValue, setTextValue] = useState(text);
  const [updateMovieReview, { data, loading, error }] = useMutation(UPDATE_MOVIE_REVIEW_BY_ID);

  const handleChange = (e) => {
    setTextValue(e.target.value);
    
  };

  const handleBlur = (e) => {
    setTextValue(e.target.value);
    // input: { id: "335f0ff2-7f96-413f-8d26-6224039356c4", movieReviewPatch: { body: "teste" } 
    updateMovieReview({
      variables: {
        id: '335f0ff2-7f96-413f-8d26-6224039356c4',
        body: textValue
      }
    }).then(() => console.log("CHEGANDO AQUI NO THEN"));

    console.log(data)
  };
  
  const toggleEditing = () => { setIsEditing(!isEditing) };

  if (isEditing) {
    return (<input onBlur={handleBlur} onChange={handleChange} value={textValue}/>)
  }

  return (<p className="text-sm font-medium leading-5 text-gray-600" onClick={toggleEditing}>"{textValue}"</p>)
}
