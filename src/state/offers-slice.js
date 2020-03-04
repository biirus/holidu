import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    offersMap: {},
    offers: [],
    cursor: {
        totalCount: 0,
        nextPage: null,
        previousPage: null
    }
};

const offersSlice = createSlice({
    name: 'offers',
    initialState,
    reducers: {
        fetch(state, action) {
            console.log('action', action);
            return state;
        },
        success(state, { payload }) {
            const { offers, metaData } = payload;

            state.cursor = metaData.cursor;

            offers.forEach(offer => {
                state.offersMap[offer.id] = offer;
            });

            state.offers = offers.map(offer => offer.id);

            return state;
        },
        error(state, action) {
            return state;
        }
    }
});

const { actions, reducer } = offersSlice;
export const { fetch, success, error } = actions;
export default reducer;
