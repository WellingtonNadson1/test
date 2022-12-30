import { v4 } from 'uuid';
import { Query } from '../../database/index.js';

const db = Query

class UserRepository {
  async findAll(){
    const rows = await db(`SELECT * FROM users`)
    return rows
  }

  async findById(id){
    const [ row ] = await db(`SELECT * FROM users WHERE id_User = $1`, [id])
    return row
  }

  async createUser(name_User, last_NameUser, email_User, id_Phone, dateCreateUser, statusAtivo){
    const [ row ] = await db(`INSERT INTO users(id_User, name_User, last_NameUser, email_User, id_Phone, dateCreateUser, statusAtivo)
    VALUES($1, $2, $3, $4, $5, $6, $7)
    RETURNING *
    `, [v4(), name_User, last_NameUser, email_User, id_Phone, dateCreateUser, statusAtivo])

    return row
  }

  async updateUser(id, name_User, last_NameUser, email_User, id_Phone, dateCreateUser, statusAtivo){
    const [ row ] = await db(`UPDATE users SET name_User = $2, last_NameUser = $3, email_User = $4, id_Phone = $5, dateCreateUser = $6, statusAtivo = $7 WHERE id_User = $1`, [id, name_User, last_NameUser, email_User, id_Phone, dateCreateUser, statusAtivo])
    return row
  }

  async deleteUser(id){
    const [ row ] = await db(`DELETE FROM users WHERE id_User = $1`, [id])
    return row
  }

}

export default new UserRepository();
