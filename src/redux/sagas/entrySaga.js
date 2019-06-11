import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* postInventory(action) {
    try {
        console.log('postInventory - action.payload: ', action.payload);
        yield axios.post('/api/inventory', action.payload);
        yield put({
            type: 'FETCH_INVENTORY',
        });
    } catch (error) {
        console.log('error HELP:', error);
    }
}


function* postInventorySaga() {
  yield takeLatest('POST_INVENTORY', postInventory);
}

export default postInventorySaga;


