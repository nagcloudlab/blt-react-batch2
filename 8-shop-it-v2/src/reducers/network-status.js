

export function networkStatusReducer(state = {}, action) {
    switch (action.type) {
        case 'REQUEST_BEGIN':
            const message = action.payload.message;
            return { message };
        case 'REQUEST_COMPLETED':
            return { message: '' };
        case 'REQUEST_FAILED':
            return { message: action.payload.message };
        default:
            return state;
    }
}