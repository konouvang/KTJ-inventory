import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* updateInventory(action) {
    console.log(action);
    try {
        const response = yield axios.put('/api/inventory/' + action.payload.inventoryId, action.payload);
        yield put({type: 'FETCH_INVENTORY', payload: response.data});
    } catch (error) {
        console.log('error HELP:', error);
    }
}


function* updateInventorySaga() {
  yield takeLatest('UPDATE_INVENTORY', updateInventory);
}

export default updateInventorySaga;
