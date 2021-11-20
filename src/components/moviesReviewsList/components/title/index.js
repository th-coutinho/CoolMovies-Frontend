import { useState, useEffect } from 'react';
import { useStoreon } from 'storeon/react';
import PubSub from 'pubsub-js';

export default function Text({ id, title }) {
  const { editingId, hasChanges, dispatch } = useStoreon('editingId', 'hasChanges');
  const [titleValue, setTitleValue] = useState(title);
  const isEditing = editingId === id;

  const handleChange = (e) => {
    const reviewTitle = e.target.value;
    if (!hasChanges) dispatch('setHasChanges', true);

    setTitleValue(reviewTitle);
  };

  const handleBlur = () => {
    dispatch('setReviewEditionValues', { title: titleValue });
  };

  useEffect(() => {
    if (isEditing) {
      PubSub.subscribe('reset-fields', () => {
        setTitleValue(title);
      });
    }
  });

  if (isEditing) {
    return (
      <div className="flex">
        <textarea
          className="px-2 h-12 overflow-hidden w-full border border-blue-500  rounded-lg resize-none outline-none font-semibold text-blue-500"
          onChange={handleChange}
          onBlur={handleBlur}
          value={titleValue}
          maxLength="32"
          spellCheck="false"/>
      </div>
    )
  }

  return (<p className="p-2 h-10 font-semibold text-gray-800">{titleValue}</p>)
};
