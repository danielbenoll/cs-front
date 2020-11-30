import mensagens from "./mensagens";

export default {
  nomeSecao: {
    required: mensagens.required,
    minLength: {value: 1, message: mensagens.minLength + ' (mínimo de 1 caracteres)' },
    maxLength: {value: 45, message: mensagens.maxLength + ' (máximo de 45 caracteres)' },
  },
  descricaoSecao: {
    required: mensagens.required,
    minLength: {value: 1, message: mensagens.minLength + ' (mínimo de 1 caracteres)' },
    maxLength: {value: 200, message: mensagens.maxLength + ' (máximo de 200 caracteres)' },
  },
}