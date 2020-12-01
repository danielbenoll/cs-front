import csApi from "./csApi"
class PaisesService {
  getAll() {
    return csApi.get('paises')
  }

  get(id) {
    return csApi.get(`paises/${id}`)
  }

  create(data) {

    data = {...data}

    return csApi.post('paises', data)

  }

  update(id, data) {
    data = {...data}

    return csApi.put(`paises/${id}`, data)
  }

  delete(id) {
    return csApi.delete(`paises/${id}`)
  }
}

export default new PaisesService()