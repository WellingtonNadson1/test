import { send } from "../../helpers/Send.js";
import UserRepository from "../../repositories/UserRepositories/UserRepository.js";

class UserContrller {
  async index(request, response){
    const users = await UserRepository.findAll()
    if (users.length === 0) (
      send(404, response, { message: 'Zero user'})
      )
      else {
        send(200, response, users)
      }
    }

  async show(request, response){
    const { id } = request.params
    const user = await UserRepository.findById(id)
    if (!user) {
      return send(404, response, {message: 'User not exist'})
    }
    send(200, response, user)
  }

  async store(request, response){
    const { name_User, last_NameUser, email_User, id_Phone, dateCreateUser, statusAtivo } = request.body
    const newUser = await UserRepository.createUser(name_User, last_NameUser, email_User, id_Phone, dateCreateUser, statusAtivo)
    send(201, response, newUser)
  }

  async update(request, response){
    const { id } = request.params
    const { name_User, last_NameUser, email_User, id_Phone, dateCreateUser, statusAtivo } = request.body
    const updateUser = await UserRepository.updateUser(id, name_User, last_NameUser, email_User, id_Phone, dateCreateUser, statusAtivo)
    send(200, response, updateUser)
  }

  async delete(request, response){
    const { id } = request.params
    const deleteUser = await UserRepository.deleteUser(id)
    send(202, response, {})
  }
}

export default new UserContrller();
