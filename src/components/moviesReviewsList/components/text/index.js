import { useState, useEffect } from 'react';
import { useStoreon } from 'storeon/react';
import PubSub from 'pubsub-js';

export default function Text({ id, text }) {
  const { editingId, hasChanges, dispatch } = useStoreon('editingId', 'hasChanges');
  const [textValue, setTextValue] = useState(text);
  const isEditing = editingId === id;


  const handleChange = (e) => {
    const reviewText = e.target.value;
    if (!hasChanges) dispatch('setHasChanges', true);

    setTextValue(reviewText);
  };

  const handleBlur = () => {
    dispatch('setReviewEditionValues', { body: textValue });
  };


  useEffect(() => {
    if (isEditing) {
      PubSub.subscribe('reset-fields', () => {
        setTextValue(text);
      });
    }
  });

  if (isEditing) {
    return (
      <textarea
        className="border border-blue-500 py-1 px-2 rounded-lg w-full resize-none outline-none text-xs 2xl:text-sm h-80 xs:h-60 overflow-y-auto font-medium leading-4 text-blue-500 placeholder-blue-300"
        onChange={handleChange}
        onBlur={handleBlur}
        value={textValue}
        spellCheck="false"
        maxLength="445"
        placeholder="Example: Really nice review here!"/>
    )
  }

  return (<p className="text-xs 2xl:text-sm xs:h-60 p-2 overflow-y-auto break-words font-medium leading-4 text-gray-600">{textValue}</p>)
};
