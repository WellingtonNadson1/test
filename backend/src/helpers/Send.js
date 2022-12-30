export function send(statusCode, response, body){
  response.setHeader("Access-Control-Allow-Origin", "http://localhost:5173")
  response.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS")
  response.setHeader("Access-Control-Max-Age", "86400")
  response.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With, application/json")

  response.writeHead(statusCode, {'Content-type': 'application/json'})

  .end(JSON.stringify(body))
}
