import mensagens from "./mensagens";

export default {
  localPais: {
    required: mensagens.required,
    maxLength: {value: 45, message: mensagens.maxLength + ' (máximo de 45 caracteres)' },
  },
  bandeiraPais: {
    maxLength: {value: 280, message: mensagens.maxLength + ' (máximo de 280 caracteres)' },
  },
}