import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* updateInventory(action) {
    try {
        console.log('postInventory - action.payload: ', action.payload);
        yield axios.post('/api/inventory', action.payload);
        yield put({
            type: 'GET_INVENTORY',
        });
    } catch (error) {
        console.log('error HELP:', error);
    }
}


function* updateInventorySaga() {
  yield takeLatest('UPDATE_INVENTORY', updateInventory);
}

export default updateInventorySaga;
