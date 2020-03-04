import { call, put, takeLatest, delay } from 'redux-saga/effects';
import * as ui from 'state/ui-slice';
import * as offers from 'state/offers-slice';

const api = {
    fetch: async () => {
        const result = await fetch(process.env.REACT_APP_API_URL);
        const data = await result.json();
        return data;
    }
};

function* fetchData() {
    yield put(ui.pending());

    try {
        const data = yield call(api.fetch);
        yield put(offers.success(data));
        yield put(ui.success());
    } catch (e) {
        yield put(ui.error(e.message));
    }

    yield delay(4000);
    yield put(ui.idle());
}

export default function*() {
    yield takeLatest(offers.fetch.type, fetchData);
}
