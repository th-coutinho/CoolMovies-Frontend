import { useState } from 'react';
import { useStoreon } from 'storeon/react';
import { useMutation } from '@apollo/client';
import { toast } from 'tailwind-toast';
import { UPDATE_MOVIE_REVIEW_BY_ID } from 'operations/mutations/index';
import { successAlertConfig, errorAlertConfig } from './utils';
import { FaTrash, FaPen, FaSave } from 'react-icons/fa';

export default function Actions({ id, title, body, rating, movie }) {
  const [ isSaveDisabled, setIsSaveDisabled ] = useState(false);
  const [ isHoveringEdit, setisHoveringEdit ] = useState(false);
  const [ isHoveringDelete, setisHoveringDelete ] = useState(false);
  const { editingId, currentReview, hasChanges, dispatch } = useStoreon('editingId', 'currentReview', 'hasChanges', 'movieReviews');
  const [updateMovieReview, { loading }] = useMutation(UPDATE_MOVIE_REVIEW_BY_ID, {
    onError: ((err) => handleError(err)),
    onCompleted: (() => handleSuccess())
  });

  const isEditing = editingId === id;

  const handleError = () => {
    toast().danger('Something went wrong!', 'Please try again.').with(errorAlertConfig).show();
  };

  const handleSuccess = () => {
    dispatch('setHasChanges', false);
    dispatch('toggleReviewEdition', null);

    toast().success('Great!','This review has been succesfully updated.').with(successAlertConfig).show();
  }

  const handleMouseOverEdit = () => {
    setisHoveringEdit(true)
  }

  const handleMouseOutEdit = () => {
    setisHoveringEdit(false)
  }

  const handleMouseOverDelete = () => {
    setisHoveringDelete(true)
  }

  const handleMouseOutDelete = () => {
    setisHoveringDelete(false)
  }

  const enableEditingMode = () => {
    if (hasChanges) {
      dispatch('setModalEditingId', id);
      return dispatch('toggleModalVisibility');
    }

    dispatch('toggleReviewEdition', id);
    dispatch('setReviewInitialState', { title, body, rating, movie });
  };

  const disableEditingMode = () => {
    if (isSaveDisabled) return;
    if (!hasChanges) return dispatch('toggleReviewEdition', null);

    setIsSaveDisabled(true);

    updateMovieReview({
      variables: {
        ...currentReview,
        id
      },
    })
    .then(() => setIsSaveDisabled(false));
  };

  const getEditButtonText = () => {
    if (isEditing && loading) return "Saving..."
    if (isEditing) return "Update review";
    return "Edit review";
  };

  const editButtonText = getEditButtonText();
  const EditButtonIcon = isEditing ? FaSave : FaPen;
  const editButtonAction = isEditing ? disableEditingMode : enableEditingMode;

  return (
    <div className="flex gap-2">
      <button
        onMouseOver={handleMouseOverEdit}
        onMouseOut={handleMouseOutEdit}
        onClick={editButtonAction}
        type="button"
        className="transition-all duration-1000 group w-full inline-flex justify-start items-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-xs sm:text-md font-medium text-gray-700 hover:bg-gray-100 sm:mt-0 sm:text-sm">
        <EditButtonIcon/>
        {
          isHoveringEdit
          ? <span className="w-24 ml-2 overflow-hidden text-left text-black whitespace-nowrap overflow-hidden text-opacity-0 transition-all duration-500 group-hover:text-opacity-100">{editButtonText}</span>
          : <span className="w-0 text-left text-black whitespace-nowrap overflow-hidden text-opacity-0 transition-all duration-500 group-hover:text-opacity-100">{editButtonText}</span>
        }
      </button>

      <button
        onMouseOver={handleMouseOverDelete}
        onMouseOut={handleMouseOutDelete}
        onClick={ () => alert("Todo:")}
        type="button"
        className="transition-all duration-1000 group w-full inline-flex justify-start items-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-red-500 text-xs sm:text-md font-medium text-white hover:bg-red-700 sm:mt-0 sm:text-sm">
        <FaTrash/>
        {
          isHoveringDelete
          ? <span className="w-24 ml-2 overflow-hidden ml-2 text-left text-white whitespace-nowrap overflow-hidden text-opacity-0 transition-all duration-500 group-hover:text-opacity-100">Delete review</span>
          : <span className="w-0 text-left text-white whitespace-nowrap overflow-hidden text-opacity-0 transition-all duration-500 group-hover:text-opacity-100">Delete review</span>
        }
      </button>
    </div>
  )
};
