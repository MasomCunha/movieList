import { GET_ALL_MOVIES } from "../types";
import axios from "axios";

export const getAllmovies = () => {
    return (dispatch) => (
        axios.get(url).then((response) => {

            const { data } = response;

            dispatch({
                type: GET_ALL_MOVIES,
                payload: data
            })
        }).catch((error) => {
            console.log(error)
        })
    )
} 
