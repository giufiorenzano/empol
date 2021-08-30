import { InputType } from 'reactstrap/es/Input';

export type Options = string | number;

export interface Inputs {
  type: InputType;
  id: string;
  value?: string;
  label?: string;
  key: string;
  name?: string;
  options?: Options[];
  required?: boolean;
  message?: string
}

export const AllInputs: Inputs[] = [
  {
    type: 'text',
    id: 'titulo',
    label: 'Título da Série',
    key: 'titulo',
    required: true,
    message: 'Campo obrigatório',
  },
  {
    type: 'text',
    id: 'temporada',
    label: 'Temporada',
    key: 'temporada',
    required: true,
    message: 'Este número não é válido',
  },
  {
    type: 'text',
    id: 'tempo',
    label: 'Tempo médio dos episódios',
    key: 'tempo',
    required: true,
    message: 'Campo obrigatório',
  },
  {
    type: 'textarea',
    id: 'sinopse',
    label: 'Sinopse',
    key: 'sinopse',
    required: true,
    message: 'Campo obrigatório',
  },
  {
    type: 'textarea',
    id: 'atores',
    label: 'Atores',
    key: 'atores',
    required: true,
    message: 'Campo obrigatório',
  },
];

export const Checks: Inputs[] = [
  {
    type: 'radio',
    id: 'origem',
    value: 'nacional',
    label: 'Série Nacional',
    key: 'nacional',
    required: true,
  },
  {
    type: 'radio',
    id: 'origem',
    value: 'internacional',
    label: 'Série Internacional',
    key: 'internacional',
    required: true,
  },
];

export const Select: Inputs[] = [
  {
    type: 'select',
    id: 'dia',
    key: 'dia',
    options: [],
    required: true,
  },
  {
    type: 'select',
    id: 'mes',
    key: 'mes',
    options: [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ],
    required: true,
  },
  {
    type: 'select',
    id: 'ano',
    key: 'ano',
    options: [],
    required: true,
  },
];

Select.forEach((input: Inputs) => {
  if (input.id === 'dia') {
    // eslint-disable-next-line no-plusplus
    for (let i = 1; i <= 31; i++) {
      input.options?.push(i);
    }
  } else if (input.id === 'ano') {
    // eslint-disable-next-line no-plusplus
    for (let y = 1920; y <= 2021; y++) {
      input.options?.push(y);
    }
  }
});
