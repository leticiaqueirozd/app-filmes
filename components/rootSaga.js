import { takeEvery, put, all } from 'redux-saga/effects';
import { adicionarComentarioSaga } from './saga';

export function* rootSaga() {
  yield all([
    adicionarComentarioSaga(action),
  ]);
}
