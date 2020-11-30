import mensagens from "./mensagens";

export default {
  pais_idPersonagem: {
    required: mensagens.required,
    maxLength: {value: 10, message: mensagens.maxLength + ' (máximo de 10 caracteres)' },
  },
  classe_idPersonagem: {
    required: mensagens.required,
    maxLength: {value: 10, message: mensagens.maxLength + ' (máximo de 10 caracteres)' },
  },
  nomePersonagem: {
    required: mensagens.required,
    maxLength: {value: 10, message: mensagens.maxLength + ' (máximo de 10 caracteres)' },
  },
  fotoPersonagem: {
    maxLength: {value: 200, message: mensagens.maxLength + ' (máximo de 200 caracteres)' },
  },
}