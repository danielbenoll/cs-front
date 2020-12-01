import mensagens from "./mensagens";

export default {
  classe_id: {
    maxLength: {value: 10, message: mensagens.maxLength + ' (máximo de 10 caracteres)' },
  },
  secao_id: {
    required: mensagens.required,
    maxLength: {value: 10, message: mensagens.maxLength + ' (máximo de 10 caracteres)' },
  },
  pais_id: {
    maxLength: {value: 10, message: mensagens.maxLength + ' (máximo de 10 caracteres)' },
  },
  nome: {
    required: mensagens.required,
    minLength: {value: 2, message: mensagens.minLength + ' (mínimo de 2 caracteres)' },
    maxLength: {value: 45, message: mensagens.maxLength + ' (máximo de 45 caracteres)' },
  },
  descricao: {
    required: mensagens.required,
    minLength: {value: 2, message: mensagens.minLength + ' (mínimo de 10 caracteres)' },
    maxLength: {value: 400, message: mensagens.maxLength + ' (máximo de 400 caracteres)' },
  },
  foto: {
    maxLength: {value: 400, message: mensagens.maxLength + ' (máximo de 400 caracteres)' },
  },
}