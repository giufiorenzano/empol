import { configureStore } from '@reduxjs/toolkit';
import SerieRegisterReducer from './forms/SerieRegisterForm/SerieRegister.slice';

export const store = configureStore({
  reducer: {
    SerieRegisterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
