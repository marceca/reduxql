import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/App.css';



import store from '../store';
import * as types from './constants/actions';
import * as queries from './queries/queries';
import Waspql from '../wasp-component/waspql';


let typeGetBook = types.getBook;
let typeGetAllBooks = types.getAllBooks;

let API = 'http://localhost:3000/graphql';

function getAllBooks() {
  Waspql(store, typeGetAllBooks, API, queries.getAllBooks)
}

function runFirstBook(e) {
  e.preventDefault();
  let variables = {
    id: "5bb394c183f588d40f9a2c6f"
  }
  Waspql(store, typeGetBook, API, queries.getBookQuery, variables)
}

function runLebronBook(e) {
  e.preventDefault();
  let variables = {
    id: "5bb3fb5d8c1da6ea1e46230a"
  }
  Waspql(store, typeGetBook, API, queries.getBookQuery, variables)
}

const mapStateToProps = store => ({
  books: store.books
})

const MainApp = props => {
    return(
      <div className="MainApp">
        <h1>All Books</h1>
        <div>{props.books.allBooks}</div>
        <br />
        <button onClick={(e) => getAllBooks(e)}>Get All Books</button>
        <br />
        <br />
        <br />
        <div>{props.books.currentBook.name}</div>
        <div>{props.books.currentBook.genre}</div>
        <h1>Single Books</h1>
        <br />
        <button onClick={(e) => runFirstBook(e)}>Get First Book</button>
        <button onClick={(e) => runLebronBook(e)}>Get Lebron Book</button>
      </div>
    );
}

export default connect(mapStateToProps)(MainApp);
