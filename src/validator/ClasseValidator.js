import mensagens from "./mensagens";

export default {
  ladoClasse: {
    required: mensagens.required,
    maxLength: {value: 45, message: mensagens.maxLength + ' (máximo de 45 caracteres)' },
  },
  descricaoClasse: {
    required: mensagens.required,
    minLength: {value: 10, message: mensagens.minLength + ' (mínimo de 10 caracteres)' },
    maxLength: {value: 200, message: mensagens.maxLength + ' (máximo de 200 caracteres)' },
  },
  imgClasse: {
    maxLength: {value: 700, message: mensagens.maxLength + ' (máximo de 700 caracteres)' },
  },
}