import { createSlice } from '@reduxjs/toolkit';
import { seriesList, sendList } from '../../helpers/helpers';
import { SerieRegisterStateDefault } from './SerieRegister.schema';

export const SerieRegisterSlice = createSlice({
  name: 'SerieRegisterReducer',
  initialState: SerieRegisterStateDefault,
  reducers: {
    addSerie(state, action) {
      if (action.payload.temporada <= 0) {
        // eslint-disable-next-line no-param-reassign
        state.error = 'Este número não é válido';
      } else {
        // eslint-disable-next-line no-param-reassign
        state.register = true;
        // eslint-disable-next-line no-param-reassign
        state.serie = action.payload;
        seriesList.push(action.payload);
        sendList(seriesList, 'series');
      }
    },
  },
});

export default SerieRegisterSlice.reducer;
