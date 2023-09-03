// historyActions.js
// actionTypes.js

export const ADD_TO_HISTORY = 'ADD_TO_HISTORY';
export const SEARCH_WORD_SUCCESS = 'SEARCH_WORD_SUCCESS';
export const LOADING = 'LOADING';

export const addToHistory = (word) => ({
    type: 'ADD_TO_HISTORY',
    payload: word,
  });
  