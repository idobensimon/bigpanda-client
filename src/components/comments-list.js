import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SingleComment from './single-comment';
import * as actions from '../actions/actions';



class commentsList extends Component {
    constructor() {
        super();
        this.state = {
            filter:null
        };
    }

    handleChange(key) {
        return function (e) {
            var state = {};
            state[key] = e.target.value;
            this.setState(state);
        }.bind(this);
    }
    componentWillMount() {
        this.props.actions.loadComments();
    }

    render() {
        let comments = this.props.state.comments;
        let isLoading = this.props.state.loading.isLoading;

        if( this.state.filter) {
            comments = comments.filter((comment) => {
                return comment.author.includes(this.state.filter) || comment.comment.includes(this.state.filter)
            })
        }

        if (comments.length > 0)
            return (
                <div>
                    <div className="input-container">
                        <input  className="input" type="text" placeholder="Filter"
                                onChange={this.handleChange("filter")} />
                    </div>
                    {comments.map((comment,i) => <SingleComment author={comment.author} message={comment.comment} key={i}/>)}
                    {isLoading ? <div>Loading...</div> : null}
                </div>
            )

        return null;
    }
}


//module.exports = connect(state => ({state}))(commentsList);
module.exports = connect(state => ({state}),
    (dispatch) => ({
        actions: bindActionCreators({...actions}, dispatch)
    })
)(commentsList);
