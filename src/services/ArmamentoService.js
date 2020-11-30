import csApi from "./csApi"
import { unMask } from 'remask';

class ArmamentosService {
  getAll() {
    return csApi.get('armamentos')
  }

  get(id) {
    return csApi.get(`armamentos/${id}`)
  }

  create(data) {

    data = {...data}

    return csApi.post('armamentos', data)

  }

  update(id, data) {
    data = {...data}

    return csApi.put(`armamentos/${id}`, data)
  }

  delete(id) {
    return csApi.delete(`armamentos/${id}`)
  }
}

export default new ArmamentosService()