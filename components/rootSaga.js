import { all, takeEvery, put } from 'redux-saga/effects';
import { ADD_COMENTARIO, adicionarComentarioSaga } from './saga';

function* adicionarComentarioSaga(action) {
  yield put(adicionarComentarioSaga(action.comentario));
}

function* rootSaga() {
  yield all([takeEvery(ADD_COMENTARIO, adicionarComentarioSaga)]);
}

export default rootSaga;
