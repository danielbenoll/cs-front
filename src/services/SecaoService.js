import csApi from "./csApi"
import { unMask } from 'remask';

class SecoesService {
  getAll() {
    return csApi.get('secoes')
  }

  get(id) {
    return csApi.get(`secoes/${id}`)
  }

  create(data) {

    data = {...data}

    return csApi.post('secoes', data)

  }

  update(id, data) {
    data = {...data}

    return csApi.put(`secoes/${id}`, data)
  }

  delete(id) {
    return csApi.delete(`secoes/${id}`)
  }
}

export default new SecoesService()