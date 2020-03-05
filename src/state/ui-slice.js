import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    state: 'idle',
    details: null
};

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        pending(state, { payload }) {
            state.state = 'pending';
            state.details = payload || null;
            return state;
        },
        success(state, { payload }) {
            state.state = 'success';
            state.details = payload || null;
            return state;
        },
        error(state, { payload }) {
            state.state = 'error';
            state.details = payload || null;
            return state;
        },
        idle(state, { payload }) {
            state.state = 'idle';
            return state;
        }
    }
});

const { actions, reducer } = uiSlice;
export const { idle, pending, success, error } = actions;
export default reducer;
