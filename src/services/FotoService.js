import csApi from "./csApi"

class FotosService {
  getAll() {
    return csApi.get('fotos')
  }

  get(id) {
    return csApi.get(`fotos/${id}`)
  }

  create(data) {

    data = {...data}

    return csApi.post('fotos', data)

  }

  update(id, data) {
    data = {...data}

    return csApi.put(`fotos/${id}`, data)
  }

  delete(id) {
    return csApi.delete(`fotos/${id}`)
  }
}

export default new FotosService()