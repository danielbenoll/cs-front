import mensagens from "./mensagens";

export default {
  username: {
    required: mensagens.required,
    minLength: {value: 1, message: mensagens.minLength + ' (mínimo de 1 caracteres)' },
    maxLength: {value: 80, message: mensagens.maxLength + ' (máximo de 80 caracteres)' },
  },
  password: {
    required: mensagens.required,
    minLength: {value: 1, message: mensagens.minLength + ' (mínimo de 1 caracteres)' },
    maxLength: {value: 254, message: mensagens.maxLength + ' (máximo de 254 caracteres)' },
  },
  email: {
    required: mensagens.required,
    minLength: {value: 1, message: mensagens.minLength + ' (mínimo de 1 caracteres)' },
    maxLength: {value: 60, message: mensagens.maxLength + ' (máximo de 60 caracteres)' },
  },
}