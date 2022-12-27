import http from 'node:http';
import { URL } from 'node:url';
import { bodyParser } from './helpers/bodyParser.js';
import { send } from './helpers/Send.js';
import { routes } from './routes.js';

const PORT = 3000;
const hostname = 'localhost';

const server = http.createServer((request, response) =>{
  const parserURL = new URL(`http://${hostname}:${PORT}${request.url}`);
  let { pathname } = parserURL;
  let id = null;
  const splitEndPoint = pathname.split('/').filter(Boolean);
  if (splitEndPoint.length > 1) {
    pathname = `/${splitEndPoint[0]}/:id`;
    id = splitEndPoint[1];
  }
  const route = routes.find(routeObj => (
    routeObj.endpoint === pathname && routeObj.method === request.method
  ))

  if (route) {
    request.params = { id }
    if (['POST', 'PUT', 'PATCH'].includes(request.method)) {
      bodyParser( request, () =>{
        route.handler(request, response)
      })
    } else {
      route.handler(request, response)
    }
  } else {
    send(404, response, { error: 'route not found'})
  }
})

server.listen(PORT, hostname, () => console.log(
  `🚀 Server runningt at http://${hostname}:${PORT}`
));
