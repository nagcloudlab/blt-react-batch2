
export function reviewsReducer(state = {}, action) {
    switch (action.type) {
        case 'LOAD_REVIEWS_SUCCESS':
            return { ...state, [action.productId]: action.reviews }
        case 'ADD_NEW_REVIEW':
            const reviews = state[action.productId]
            return { ...state, [action.productId]: [action.review, ...reviews] }
        default:
            return state
    }
}