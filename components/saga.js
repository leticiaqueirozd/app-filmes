import { takeEvery, put } from 'redux-saga/effects';
import { adicionarComentarioSuccess } from './FilmesActions';

export function* adicionarComentarioSaga(action) {
  const { filmeId, comentario } = action.payload;

  yield put(adicionarComentarioSuccess(filmeId, comentario));
}

export function* rootSaga() {
  yield takeEvery('ADD_COMENTARIO', adicionarComentarioSaga);
}
