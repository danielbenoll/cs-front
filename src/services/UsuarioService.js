import csApi from "./csApi"

class UsuarioService {

  login(data) {
    return csApi.post(`users/token`, data)
  }

  getAll() {
    return csApi.get('users')
  }

  get(id) {
    return csApi.get(`users/${id}`)
  }

  create(data) {

    data = {...data}

    return csApi.post('users', data)

  }

  update(id, data) {
    data = {...data}

    return csApi.put(`users/${id}`, data)
  }

  delete(id) {
    return csApi.delete(`users/${id}`)
  }
}

export default new UsuarioService()