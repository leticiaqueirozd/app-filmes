import { takeEvery, put } from 'redux-saga/effects';
import { adicionarComentario } from './FilmesActions';

export function* adicionarComentarioSaga(action) {
  const { filmeId, comentario } = action.payload;

  yield put(adicionarComentario(filmeId, comentario));
}

export function* rootSaga() {
  yield takeEvery('ADD_COMENTARIO', adicionarComentarioSaga);
}

export default rootSaga;
