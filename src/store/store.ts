import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import stateReducer from './stateSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, stateReducer);

const store = configureStore({
  reducer: {
    clickState: persistedReducer,
  },
});

export const persistor = persistStore(store);
export default store;
