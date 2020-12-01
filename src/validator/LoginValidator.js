import mensagens from "./mensagens";

export default {
  email: {
    required: mensagens.required,
    minLength: {value: 1, message: mensagens.minLength + ' (mínimo de 1 caracteres)' },
    maxLength: {value: 250, message: mensagens.maxLength + ' (máximo de 250 caracteres)' },
  },
  password: {
    required: mensagens.required,
    minLength: {value: 1, message: mensagens.minLength + ' (mínimo de 1 caracteres)' },
    maxLength: {value: 60, message: mensagens.maxLength + ' (máximo de 60 caracteres)' },
  },
}