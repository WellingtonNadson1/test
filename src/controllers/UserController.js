import { send } from "../helpers/Send.js";
import UserRepository from "../repositories/UserRepository.js";

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
    const { userName, userEmail } = request.body
    const newUser = await UserRepository.createUser(userName, userEmail)
    send(201, response, newUser)
  }

  async update(request, response){
    const { id } = request.params
    const { userName, userEmail } = request.body
    const updateUser = await UserRepository.updateUser(id, userName, userEmail)
    send(200, response, updateUser)
  }

  async delete(request, response){
    const { id } = request.params
    const deleteUser = await UserRepository.deleteUser(id)
    send(202, response, {})
  }
}

export default new UserContrller();
