
const initialState = {
    language: 'en'
};

export const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LANGUAGE_CHANGE':
        return {
            ...state,
            language:action.payload
        };
        default:
        return state;
    }
}