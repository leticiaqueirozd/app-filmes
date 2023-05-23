import { takeEvery, put, all } from 'redux-saga/effects';
import { adicionarComentarioSaga } from './saga';

export function* rootSaga() {
  yield all([
    takeEvery('ADD_COMENTARIO', adicionarComentarioSaga)
  ]);
}

export default rootSaga;
