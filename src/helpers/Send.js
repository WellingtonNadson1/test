export function send(statusCode, response, body){
  response.writeHead(statusCode, {'Content-type': 'application/json'})
  .end(JSON.stringify(body))
}
