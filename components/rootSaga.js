import { all } from 'redux-saga/effects';
import { adicionarComentarioSaga } from './saga';

export default function* rootSaga() {
  yield all([
    adicionarComentarioSaga,
  ]);
}
