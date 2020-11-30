import mensagens from "./mensagens";

export default {
  modoModo: {
    required: mensagens.required,
    maxLength: {value: 45, message: mensagens.maxLength + ' (máximo de 45 caracteres)' },
  },
  descricaoModo: {
    required: mensagens.required,
    minLength: {value: 1, message: mensagens.minLength + ' (mínimo de 1 caracteres)' },
    maxLength: {value: 400, message: mensagens.maxLength + ' (máximo de 400 caracteres)' },
  },
}