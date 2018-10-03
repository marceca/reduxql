import * as types from '../constants/actions';
import React from 'react';

const initState = {
  authors: [],
  books: {
    name: '',
    genre: ''
  }
}

const eventReducer = (state=initState, action) => {
  switch(action.type) {
    case types.GetAuthor:
      let GetAuthorState = Object.assign({}, state);
      console.log('state ', state)
      GetAuthorState.books.name = action.data.data.book.name;
      GetAuthorState.books.genre = action.data.data.book.genre;

    return GetAuthorState

    default:
    console.log('state ran for default state: ',state)
      return state;
  }
}

export default eventReducer;