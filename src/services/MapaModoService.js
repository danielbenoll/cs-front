import csApi from "./csApi"

class MapaModosService {
  getAll() {
    return csApi.get('mapa-modos')
  }

  get(id) {
    return csApi.get(`mapa-modos/${id}`)
  }

  create(data) {

    data = {...data}

    return csApi.post('mapa-modos', data)

  }

  update(id, data) {
    data = {...data}

    return csApi.put(`mapa-modos/${id}`, data)
  }

  delete(id) {
    return csApi.delete(`mapa-modos/${id}`)
  }
}

export default new MapaModosService()