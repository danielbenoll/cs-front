import csApi from "./csApi"

class MapasService {
  getAll() {
    return csApi.get('mapas')
  }

  get(id) {
    return csApi.get(`mapas/${id}`)
  }

  create(data) {

    data = {...data}

    return csApi.post('mapas', data)

  }

  update(id, data) {
    data = {...data}

    return csApi.put(`mapas/${id}`, data)
  }

  delete(id) {
    return csApi.delete(`mapas/${id}`)
  }
}

export default new MapasService()