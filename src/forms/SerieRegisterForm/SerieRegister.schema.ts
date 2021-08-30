import { SerieDefault, SerieSchema } from '../../schemas/serie';

export interface SerieRegisterState {
  error: string | null,
  serie: SerieSchema,
  register: Boolean
}

export const SerieRegisterStateDefault: SerieRegisterState = {
  error: null,
  serie: SerieDefault,
  register: false,
};
