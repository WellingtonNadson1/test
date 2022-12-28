export function bodyParser(request, callback){
  let body = ''
  request.on('data', (chunk) =>{
    body += chunk
  });
  request.on('end', () =>{
    const data = JSON.parse(body)
    request.body = data
    callback()
  })
}
