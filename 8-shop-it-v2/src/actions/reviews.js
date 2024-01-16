

// LOAD_REVIEWS 
// ADD_NEW_REVIEW

import { getReviews, postReview } from "../api";

export function loadReviews(productId) {
    return function (dispatch) {
        dispatch({ type: 'REQUEST_BEGIN', payload: { message: 'Loading reviews...' } });
        getReviews(productId)
            .then((response) => {
                dispatch({ type: 'REQUEST_COMPLETED' });
                const action = {
                    type: 'LOAD_REVIEWS_SUCCESS',
                    productId,
                    reviews: response.data
                }
                dispatch(action);
            })
            .catch((err) => {
                dispatch({ type: 'REQUEST_FAILED', payload: { message: err.message } });
                const action = {
                    type: 'LOAD_REVIEWS_FAILED',
                    productId,
                    reviews: [],
                    error: err.message
                }
                dispatch(action);
            })
    }
}

export function addNewReview(productId, review) {
    return {
        type: 'ADD_NEW_REVIEW',
        productId,
        review
    }
}