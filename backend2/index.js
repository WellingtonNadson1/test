import cors from 'cors';
import express, { json } from 'express';
import router from './src/routes/routes.js';
const PORT = process.env.PORT || 3000;
const hostname = 'localhost'

const server = express();
server.use(json())
server.use(cors())
server.use(router)

server.listen(PORT, hostname, () =>{
  console.log(`🚀 Server running at http://${hostname}:${PORT}`)
})
