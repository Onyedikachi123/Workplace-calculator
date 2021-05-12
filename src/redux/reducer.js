import {SET_COMPANY_NAME, SET_ERROR_MESSAGE, HAS_ERROR_STATUS, SET_COMMENTS} from './actionTypes'

const initialState = {
    companyName: '',
    errorMessage: '',
    comments:[],
    pageId:1,
    hasError:false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ERROR_MESSAGE:
            let error = action.payload;
            return { ...state, errorMessage: error }
        case SET_COMPANY_NAME:
            return { ...state, companyName: action.payload }
        case SET_COMMENTS:
            debugger
            return { ...state, comments: action.payload.comments, pageId: action.payload.pageId }
        case HAS_ERROR_STATUS:
            return { ...state, ...action.payload }
        default:
            return state;
    }
}

export default reducer;