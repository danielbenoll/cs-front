import mensagens from "./mensagens";

export default {
  lado: {
    required: mensagens.required,
    maxLength: {value: 45, message: mensagens.maxLength + ' (máximo de 45 caracteres)' },
  },
  descricao: {
    required: mensagens.required,
    minLength: {value: 1, message: mensagens.minLength + ' (mínimo de 1 caracteres)' },
    maxLength: {value: 200, message: mensagens.maxLength + ' (máximo de 200 caracteres)' },
  },
  img: {
    maxLength: {value: 700, message: mensagens.maxLength + ' (máximo de 700 caracteres)' },
  },
}