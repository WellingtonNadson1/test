import UserController from "./controllers/UserControllers/UserController.js";

export let routes = [
  {
    endpoint: '/users',
    method: 'GET',
    handler: UserController.index
  },
  {
    endpoint: '/users/:id',
    method: 'GET',
    handler: UserController.show
  },
  {
    endpoint: '/users',
    method: 'POST',
    handler: UserController.store
  },
  {
    endpoint: '/users/:id',
    method: 'PUT',
    handler: UserController.update
  },
  {
    endpoint: '/users/:id',
    method: 'DELETE',
    handler: UserController.delete
  },
]
