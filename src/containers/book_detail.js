import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component {
    render() {
        if(!this.props.book) {
            return <div>Select a book to get started</div>
        }
        return (
            <div className="col-md-6">
                <h3>Details</h3>
                <div>Title: {this.props.book.title}</div>
                <div>Author: {this.props.book.author}</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        book: state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail)