import { v4 } from 'uuid';
import { Query } from '../database/index.js';

const db = Query

class UserRepository {
  async findAll(){
    const rows = await db(`SELECT * FROM users`)
    return rows
  }

  async findById(id){
    const [ row ] = await db(`SELECT * FROM users WHERE id = $1`, [id])
    return row
  }

  async createUser(userName, userEmail){
    const [ row ] = await db(`INSERT INTO users(id, userName, userEmail)
    VALUES($1, $2, $3)
    RETURNING *
    `, [v4(), userName, userEmail])

    return row
  }

  async updateUser(id, userName, userEmail){
    const [ row ] = await db(`UPDATE users SET username = $2, useremail = $3 WHERE id = $1`, [id, userName, userEmail])
    return row
  }

  async deleteUser(id){
    const [ row ] = await db(`DELETE FROM users WHERE id = $1`, [id])
    return row
  }

}

export default new UserRepository();
