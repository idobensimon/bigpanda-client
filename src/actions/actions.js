var qs = require('qs');
var axios = require('axios');

export function addComment(author, comment) {
    return {
        type: 'ADD_COMMENT',
        author,
        comment
    }
}

export function addCommentAsync(author, comment) {
    let data = {author,comment};

    let p = axios.post('http://localhost:3000/comment', data)

    return {
        type: 'ADD_COMMENT',
        payload: p
    }
}

export function loadComments() {

    let p = axios.get('http://localhost:3000/comments')

    return {
        type: 'FETCH_COMMENTS',
        payload: p
    }
}


