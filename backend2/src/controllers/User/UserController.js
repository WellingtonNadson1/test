import UserRepository from "../../repositories/User/UserRepositorie.js";

class UserContrller {
  async index(request, response){
    const users = await UserRepository.findAll()
    if (users.length === 0) {
      return response.status(404).json({ erro: 'Zero user'})
    }
    response.status(200).json(users)
    }

  async show(request, response){
    const { id } = request.params
    const user = await UserRepository.findById(id)
    if (!user) {
      return response.status(404).json({ erro: 'User not exist'})
    }
    response.status(200).json(user)
  }

  async store(request, response){
    const { name_User, last_NameUser, email_User, id_Phone, dateCreateUser, statusAtivo } = request.body
    const newUser = await UserRepository.createUser(name_User, last_NameUser, email_User, id_Phone, dateCreateUser, statusAtivo)
    response.status(201).json(newUser)
  }

  async update(request, response){
    const { id } = request.params
    const { name_User, last_NameUser, email_User, id_Phone, dateCreateUser, statusAtivo } = request.body
    const updateUser = await UserRepository.updateUser(id, name_User, last_NameUser, email_User, id_Phone, dateCreateUser, statusAtivo)
    response.status(200).json(updateUser)
  }

  async delete(request, response){
    const { id } = request.params
    const deleteUser = await UserRepository.deleteUser(id)
    response.status(202)
  }
}

export default new UserContrller();
