import React, { Component } from 'react';
let gravater = require('gravatar');


class SingleComment extends Component {

    render() {
        return (
            <div className="single-comment-container">
                <div className="comment-img">
                    <img src={gravater.url(this.props.author)} />
                </div>
                <div className="comment-body">
                    <div className="comment-email">
                        {this.props.author}
                    </div>
                    <div className="comment-message">
                        {this.props.message}
                    </div>
                </div>
            </div>
            )
    }
}

module.exports = SingleComment;
