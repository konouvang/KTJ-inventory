import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_INVENTORY" actions
function* postInventory(action) {
    const imageId = action.payload.imageId;
    try {
        yield Axios.post('/api/inventory', action.payload);
        const newPayload = {
            ...action.payload,
            id: action.payload.id
        }
        yield put({
            type: 'GET_INVENTORY',
            payload: newPay,
        });
    } catch (error) {
        console.log('error HELP:', error);
    }
}


function* postInventorySaga() {
  yield takeLatest('POST_INVENTORY', postInventory);
}

export default postInventorySaga;


