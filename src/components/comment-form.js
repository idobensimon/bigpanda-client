import React, { Component } from 'react';
import * as actions from '../actions/actions';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class Comment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email:   "",
            message: ""
        };
    }

    handleChange(key) {
        return function (e) {
            var state = {};
            state[key] = e.target.value;
            this.setState(state);
        }.bind(this);
    }

    submit() {
        this.props.actions.addCommentAsync(this.state.email,this.state.message);
    }

    render() {
        return (
            <div className="comment-form">
                <div className="input-container">
                    <input  className="input" type="email" placeholder="Email"
                            onBlur={this.handleChange("email")} />
                </div>
                <div className="input-container">
                    <input  className="input" type="text" placeholder="Message"
                            onBlur={this.handleChange("message")} />
                </div>
                <div className="submit-container">
                    <button className="submit-btn" onClick={this.submit.bind(this)}>
                        Submit
                    </button>
                </div>
            </div>
            )
    }
}

module.exports = connect(state => ({state}),
    (dispatch) => ({
        actions: bindActionCreators({...actions}, dispatch)
    })
)(Comment);