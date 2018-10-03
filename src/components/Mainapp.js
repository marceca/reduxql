import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/App.css';



import store from '../store';
import * as types from './constants/actions';
import * as queries from './queries/queries';
import Waspql from '../wasp-component/waspql';


let type = types.getAuthor;

let API = 'http://localhost:3000/graphql';

function runFunc(e) {
  e.preventDefault();
  Waspql(store, type, API, queries.getBookQuery)
}

const mapStateToProps = store => ({
  books: store.books
})

console.log(store.books)
const MainApp = props => {
  console.log('props',props)

    return(
      <div className="MainApp">
        <h1>Welcome</h1>
        <h1>Authors</h1>
        <div>{props.books.books.name}</div>
        <div>{props.books.books.genre}</div>
        <button onClick={(e) => runFunc(e)}>Get Query</button>
      </div>
    );
}

export default connect(mapStateToProps)(MainApp);
