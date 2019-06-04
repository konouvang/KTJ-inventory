import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_SECRETS" actions
function* fetchUsers() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
    
    const response = yield axios.get('api/allusers', config);
    
    yield put({ type: 'SET_ALLUSERS', payload: response.data });
  } catch (error) {
    console.log('Secrets get request failed', error);
  }
}

function* alluserSaga() {
  yield takeLatest('FETCH_USERS', fetchUsers);
}

export default alluserSaga;
