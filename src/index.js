import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './components/comment-form';
import CommentsList from './components/comments-list.js';
import '../styles/style.scss';

import { Provider } from 'react-redux';
import store, { history } from './store';

ReactDOM.render(
    <Provider store={store}>
        <div className="main">
            <div>
                <Comment />
                <CommentsList />
            </div>
        </div>
    </Provider>,
    document.getElementById('app')
);

module.hot.accept();