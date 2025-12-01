import express from 'express'

export class Servidor {
  app;
  port;
  constructor() {
    this.app = express();
    this.port = process.env.API_PORT || 3800;
    this.rutas();
  }

  listen = () => {
    this.app.listen(this.port, () => {
      console.log(`server running at http://localhost:${this.port}`);
    })
  }
  rutas = () => {
    this.app.get('/', (req, res) => {
      res.send('Hello World')
    })
  }
}