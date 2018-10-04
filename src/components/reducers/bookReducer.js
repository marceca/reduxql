import * as types from '../constants/actions';
import React from 'react';
import Waspql from '../../wasp-component/waspql';

import store from '../../store';
import * as queries from '../queries/queries';
let typeGetBook = types.getBook;
let API = 'http://localhost:3000/graphql';

const initState = {
  allBooks: [],
  allBookList: [],
  currentBook: {
    name: '',
    genre: '',
  }
}

const eventReducer = (state=initState, action) => {
  switch(action.type) {
    case types.GetBook:
      let GetBookState = Object.assign({}, state);
      GetBookState.currentBook.name = action.data.data.book.name;
      GetBookState.currentBook.genre = action.data.data.book.genre;
      console.log('state: ', GetBookState)
    return GetBookState

    case types.GetAllBooks:
    let GetAllBooksState = Object.assign({}, state);
    GetAllBooksState.allBooks = [];
    for(let i = 0; i < action.data.data.books.length; i++) {
      let id = {
        id: action.data.data.books[i].id
      }
      let book = <div onClick={() => Waspql(store, typeGetBook, API, queries.getBookQuery, id)} key={action.data.data.books[i].id}>Book Name: {action.data.data.books[i].name} &nbsp;&nbsp; Book Genre: {action.data.data.books[i].genre}</div>
      GetAllBooksState.allBooks.push(book);
      GetAllBooksState.allBookList.push(action.data.data.books[i])
    }
    console.log('state: ', GetAllBooksState)
    return GetAllBooksState;

    default:
    console.log('state ran for default state: ',state)
      return state;
  }
}

export default eventReducer;