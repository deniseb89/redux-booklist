import React, { Component } from 'react';
import BookList from '../containers/book_list';
import BookDetail from '../containers/book_detail';
export default class App extends Component {
  render() {
    return (
      <div>
        <h1>A Book of Lists:</h1>
        <div className="row">
          <BookList/>
          <BookDetail/>
        </div>
      </div>
    );
  }
}
