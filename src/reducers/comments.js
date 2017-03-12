const initialState = [
    {author: "idobensimon@gmail.com", comment: "this is the first comment"},
    {author: "emerleite@gmail.com", comment: "this is the second comment"}
];

function postComments(state = initialState, action = null) {
    switch(action.type){
        case 'ADD_COMMENT':
            return [...state.comments,{
                author: action.author,
                comment: action.comment
            }];
        case 'ADD_COMMENT_FULFILLED':
            return [...state,{
                author: action.payload.data.result.comment.author,
                comment: action.payload.data.result.comment.comment
            }];
        case 'FETCH_COMMENTS_FULFILLED':
            return [...state,
                ...action.payload.data.result]

        default:
            return state;
    }
    return state;
}


export default postComments;