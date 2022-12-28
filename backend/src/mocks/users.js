import { v4 } from "uuid";

export let users = [
  {
    id_User: v4(),
    name_User: 'Wellington',
    last_NameUser: 'Durans',
    email_User: 'wellingtonnadson@gmail.com',
    id_Phone: v4(),
    dateCreateUser: new Date().getTime(),
    statusAtivo: true
  },
]
