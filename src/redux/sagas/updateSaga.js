import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* updateInventory(action) {
    try {
        const response = yield axios.put('/api/inventory', action.payload);
        yield put({type: 'FETCH_INVENTORY', payload: response.data});
    } catch (error) {
        console.log('error HELP:', error);
    }
}


function* updateInventorySaga() {
  yield takeLatest('UPDATE_INVENTORY', updateInventory);
}

export default updateInventorySaga;
