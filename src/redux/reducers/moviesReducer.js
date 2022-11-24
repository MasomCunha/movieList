import { GET_ALL_MOVIES } from "../types";


const initialState = {
    moviesList: []
}

const moviesReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_MOVIES: {
            return {
                ...state,
                moviesList: action.payload
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}


export default moviesReducer