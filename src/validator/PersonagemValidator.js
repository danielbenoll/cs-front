import mensagens from "./mensagens";

export default {
  pais_id: {
    required: mensagens.required,
    maxLength: {value: 10, message: mensagens.maxLength + ' (máximo de 10 caracteres)' },
  },
  classe_id: {
    required: mensagens.required,
    maxLength: {value: 10, message: mensagens.maxLength + ' (máximo de 10 caracteres)' },
  },
  nome: {
    required: mensagens.required,
    maxLength: {value: 45, message: mensagens.maxLength + ' (máximo de 45 caracteres)' },
  },
  foto: {
    maxLength: {value: 400, message: mensagens.maxLength + ' (máximo de 400 caracteres)' },
  },
}