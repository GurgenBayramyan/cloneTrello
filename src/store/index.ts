import{configureStore,getDefaultMiddleware} from '@reduxjs/toolkit'
import { rootReducer } from './rootReducer'
import saga from  'redux-saga'
const sagaMiddleware = saga()

function* RootSaga() {
    
}


const store = configureStore({
    reducer:rootReducer,
    middleware: [
        ...getDefaultMiddleware({ thunk: false, serializableCheck: false }),
        sagaMiddleware,
    ],
    devTools: process.env.NODE_ENV !== 'production',
})

sagaMiddleware.run(RootSaga)
export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch