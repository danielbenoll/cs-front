import csApi from "./csApi"
import { unMask } from 'remask';

class PersonagensService {
  getAll() {
    return csApi.get('personagens')
  }

  get(id) {
    return csApi.get(`personagens/${id}`)
  }

  create(data) {

    data = {...data}

    return csApi.post('personagens', data)

  }

  update(id, data) {
    data = {...data}

    return csApi.put(`personagens/${id}`, data)
  }

  delete(id) {
    return csApi.delete(`personagens/${id}`)
  }
}

export default new PersonagensService()