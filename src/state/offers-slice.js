import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
    offersMap: {},
    offers: [],
    cursor: {
        totalCount: 0,
        nextPage: null,
        previousPage: null
    }
};

const proxyOfferId = (_, offerID) => offerID;
const offersMap = state => state.offersMap;
const offersList = state => state.offers;
const cursor = state => state.cursor;

export const cursorSelector = createSelector([cursor], cursor => cursor);
export const offersIDsSelector = createSelector([offersList], list => list);
export const offerSelector = createSelector(
    [offersMap, proxyOfferId],
    (offersMap, offerID) => {
        return offersMap[offerID];
    }
);

const offersSlice = createSlice({
    name: 'offers',
    initialState,
    reducers: {
        fetch(state, { payload }) {
            if (payload.cleanFirst) {
                state.cursor = initialState.cursor;
                state.offers = [];
                state.offersMap = {};
            }

            return state;
        },

        success(state, { payload }) {
            const { offers, metaData } = payload;

            state.cursor = metaData.cursor;
            state.offers = state.offers.concat(offers.map(offer => offer.id));

            offers.forEach(offer => {
                state.offersMap[offer.id] = offer;
            });

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
