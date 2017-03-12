
const initialState = {isLoading:false};

function loading(state = initialState, action = null) {
    switch(action.type){
        case 'ADD_COMMENT_FULFILLED':
            return {...state,
                isLoading:false
            };
        case 'ADD_COMMENT_PENDING':
            return {...state,
                isLoading:true
            };
        case 'FETCH_COMMENTS_FULFILLED':
            return {...state,
                isLoading:false
            };
        case 'FETCH_COMMENTS_PENDING':
            return {...state,
                isLoading:true
            };


        default:
            return state;
    }
    return state;
}


export default loading;