import { createStoreon } from 'storeon';
import { storeonDevtools } from 'storeon/devtools';

const movieReviewsStore = (store) => {
  store.on('@init', () => (
    {
      currentUser: 'Chrono',
      movieReviews: [],
      editingId: null,
      currentReviewInitialState: {},
      currentReview: {
        rating: null,
        movie: '',
        title: '',
        body: ''
      },
      hasChanges: false,
      isModalVisible: false,
      modalEditingId: null
    }
  ))

  store.on('setMovieReviews', ({ _ }, collection) => {
    return {
      movieReviews: collection
    };
  });

  store.on('toggleReviewEdition', ({ _ }, cardId) => {
    return {
      editingId: cardId
    };
  });

  store.on('setReviewInitialState', ({ _ }, params) => {
    store.dispatch('setReviewEditionValues', params);

    return {
      currentReviewInitialState: params
    };
  });

  store.on('setReviewEditionValues', ({ currentReview }, params) => {
    return {
      currentReview: {
        ...currentReview,
        ...params
      }
    };
  });

  store.on('toggleModalVisibility', ({ isModalVisible }) => {
    return {
      isModalVisible: !isModalVisible
    };
  });

  store.on('setModalEditingId', ({ _ }, id) => {
    return {
      modalEditingId: id
    };
  });

  store.on('setHasChanges', ({ _ }, boolean) => {
    return {
      hasChanges: boolean
    };
  });

}

export const store = createStoreon([
  storeonDevtools,
  movieReviewsStore
]);
