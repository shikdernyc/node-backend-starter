import express from 'express'
import bodyParser from 'body-parser'
import api from 'api'
import models from 'models'
import errorHandler from 'handlers/error'
import cors from 'cors'
import { API_ROUTE, PORT } from 'config'

const app = express()

app.use(cors({
  credentials: true,
}));

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(bodyParser.json());
app.use(API_ROUTE, api);
app.use(errorHandler);

function startServer() {
  return app.listen(PORT, () => {
    models.sequelize
      .sync({
        force: false
      })
    console.log(`
    ################################################
          Server listening on port: ${PORT}
    ################################################
    `);
  });
}

export default startServer