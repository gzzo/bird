import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects'

const sampleReducer = (state = {}) => state

// eslint-disable-next-line @typescript-eslint/no-empty-function
function* sampleRootSaga() {}

export function* rootSaga(): Generator {
  yield all([sampleRootSaga()])
}

export const reducers = combineReducers({
  sampleReducer,
})

export type RootState = ReturnType<typeof reducers>
