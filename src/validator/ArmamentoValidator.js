import mensagens from "./mensagens";

export default {
  classe_idArmamento: {
    maxLength: {value: 10, message: mensagens.maxLength + ' (máximo de 10 caracteres)' },
  },
  secao_idArmamento: {
    required: mensagens.required,
    maxLength: {value: 10, message: mensagens.maxLength + ' (máximo de 10 caracteres)' },
  },
  pais_idArmamento: {
    maxLength: {value: 10, message: mensagens.maxLength + ' (máximo de 10 caracteres)' },
  },
  nomeArmamento: {
    required: mensagens.required,
    minLength: {value: 2, message: mensagens.minLength + ' (mínimo de 2 caracteres)' },
    maxLength: {value: 45, message: mensagens.maxLength + ' (máximo de 45 caracteres)' },
  },
  descricaoArmamento: {
    required: mensagens.required,
    minLength: {value: 10, message: mensagens.minLength + ' (mínimo de 10 caracteres)' },
    maxLength: {value: 400, message: mensagens.maxLength + ' (máximo de 400 caracteres)' },
  },
  fotoArmamento: {
    maxLength: {value: 200, message: mensagens.maxLength + ' (máximo de 200 caracteres)' },
  },
}