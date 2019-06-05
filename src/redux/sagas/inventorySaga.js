import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_INVENTORY" actions
function* fetchInventory() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
    
    const response = yield axios.get('api/inventory', config);
    
    yield put({ type: 'SET_INVENTORY', payload: response.data });
  } catch (error) {
    console.log('Inventory get request failed', error);
  }
}

function* inventorySaga() {
  yield takeLatest('FETCH_INVENTORY', fetchInventory);
}

export default inventorySaga;
