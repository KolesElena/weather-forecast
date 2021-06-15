const initialState = {
    city: null,
}

export const cityReducer = (state = initialState, action ) => {
    switch(action.type) {
        case 'FETCH_CITY':
            return { city: action.payload };

        default:
            return state;
    }
}

export const selectCity = state => state.cityReducer.city;
