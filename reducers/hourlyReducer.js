const initialState = {
    hourly: null,
};

export const hourlyReducer = (state = initialState, action ) => {
    switch(action.type) {
        case 'FETCH_HOURLY':
            return { hourly: action.payload };
        case 'EMPTY_HOURLY':
                return initialState;

        default:
            return state;
    }
};


export const selectHourly = state => state.hourlyReducer.hourly;