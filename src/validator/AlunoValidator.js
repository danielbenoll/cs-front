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
    minLength: {value: 10, message: mensagens.minLength + ' (mínimo de 10 caracteres)' },
    maxLength: {value: 400, message: mensagens.maxLength + ' (máximo de 400 caracteres)' },
  },
  matricula: {
    required: mensagens.required,
    minLength: {value: 5, message: mensagens.minLength + ' (mínimo de 5 caracteres)' },
    maxLength: {value: 20, message: mensagens.maxLength + ' (máximo de 20 caracteres)' },
  },
  email: {
    maxLength: {value: 100, message: mensagens.maxLength + ' (máximo de 100 caracteres)' },
  },
  telefone: {
    minLength: {value: 14, message: mensagens.minLength + ' (mínimo de 14 caracteres)' },
    maxLength: {value: 15, message: mensagens.maxLength + ' (máximo de 15 caracteres)' },
  },
  cep: {
    maxLength: {value: 10, message: mensagens.maxLength + ' (máximo de 10 caracteres)' },
  },
  logradouro: {
    maxLength: {value: 100, message: mensagens.maxLength + ' (máximo de 100 caracteres)' },
  },
  complemento: {
    maxLength: {value: 100, message: mensagens.maxLength + ' (máximo de 100 caracteres)' },
  },
  bairro: {
    maxLength: {value: 100, message: mensagens.maxLength + ' (máximo de 100 caracteres)' },
  },
  numero: {
    maxLength: {value: 20, message: mensagens.maxLength + ' (máximo de 20 caracteres)' },
  },
}