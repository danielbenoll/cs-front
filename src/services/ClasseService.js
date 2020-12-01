import csApi from "./csApi"

class ClassesService {
  getAll() {
    return csApi.get('classes')
  }

  get(id) {
    return csApi.get(`classes/${id}`)
  }

  create(data) {

    data = {...data}

    return csApi.post('classes', data)

  }

  update(id, data) {
    data = {...data}

    return csApi.put(`classes/${id}`, data)
  }

  delete(id) {
    return csApi.delete(`classes/${id}`)
  }
}

export default new ClassesService()