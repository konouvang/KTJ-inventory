import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* postImageUrl() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
        console.log('POSTING IMAGE URL!');
        const response = yield axios.post('api/imageurl', action.payload, config);
        console.log(response);
        // AFTER POST COMES BACK SUCCESSFUL, DO A GET!
  } catch (error) {
    console.log('Image URL post failed: ', error);
  }
}

function* imageInfoSaga() {
  yield takeLatest('POST_IMAGE_URL', postImageUrl);
}

export default imageInfoSaga;