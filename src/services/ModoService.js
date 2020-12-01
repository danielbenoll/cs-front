import csApi from "./csApi"

class ModosService {
  getAll() {
    return csApi.get('modos')
  }

  get(id) {
    return csApi.get(`modos/${id}`)
  }

  create(data) {

    data = {...data}

    return csApi.post('modos', data)

  }

  update(id, data) {
    data = {...data}

    return csApi.put(`modos/${id}`, data)
  }

  delete(id) {
    return csApi.delete(`modos/${id}`)
  }
}

export default new ModosService()