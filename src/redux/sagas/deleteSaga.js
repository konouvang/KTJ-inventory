import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* deleteInventory(action) {
    try {
        console.log(action.payload);
        yield axios.delete(`/api/inventory/${action.payload}`);
        yield put({
            type: 'FETCH_INVENTORY'
        });
    } catch (err) {
        console.log('error HELP:', err);
    }
}



function* deleteInventorySaga() {
    yield takeLatest('DELETE_INVENTORY', deleteInventory);
  }
  
  export default deleteInventorySaga;
  