import { takeEvery, put } from 'redux-saga/effects';
import { adicionarComentario } from './FilmesActions';

export function* adicionarComentario(action) {
  const { filmeId, comentario } = action.payload;

  yield put(adicionarComentario(filmeId, comentario));
}

export function* rootSaga() {
  yield takeEvery('ADD_COMENTARIO', adicionarComentario);
}

export default rootSaga;
