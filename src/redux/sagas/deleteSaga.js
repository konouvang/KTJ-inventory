import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* deleteInventory(action) {
    try {
        yield axios.delete(`/inventory/api/${action.payload}`);
        yield put({
            type: 'GET_INVENTORY'
        });
    } catch (err) {
        console.log('error HELP:', err);
    }
}



function* deleteInventorySaga() {
    yield takeLatest('DELETE_INVENTORY', deleteInventory);
  }
  
  export default deleteInventorySaga;
  