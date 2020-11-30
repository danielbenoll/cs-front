import mensagens from "./mensagens";

export default {
  pais_idMapa: {
    required: mensagens.required,
    maxLength: {value: 10, message: mensagens.maxLength + ' (máximo de 10 caracteres)' },
  },
  nomeMapa: {
    required: mensagens.required,
    minLength: {value: 1, message: mensagens.minLength + ' (mínimo de 1 caracteres)' },
    maxLength: {value: 45, message: mensagens.maxLength + ' (máximo de 45 caracteres)' },
  },
}