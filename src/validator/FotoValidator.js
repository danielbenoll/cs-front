import mensagens from "./mensagens";

export default {
  mapa_id: {
    required: mensagens.required,
    maxLength: {value: 90, message: mensagens.maxLength + ' (máximo de 90 caracteres)' },
  },
  foto: {
    required: mensagens.required,
    maxLength: {value: 400, message: mensagens.maxLength + ' (máximo de 400 caracteres)' },
  },
}