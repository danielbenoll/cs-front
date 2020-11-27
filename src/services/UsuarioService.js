import csApi from "./csApi"

class UsuarioService {

  login(data) {
    return csApi.post(`users/token`, data)
  }

  create(data) {

    return csApi.post('users', data)
  }
}

export default new UsuarioService()