import express from 'express'
import bodyParser from 'body-parser'
import api from 'api'
import { connectToDB } from 'models'
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
  return app.listen(PORT, async () => {
    console.log(`
    ################################################
          Server listening on port: ${PORT}
    ################################################
    `);

    try {
      await connectToDB()
      console.log("Successfully connected to db")
    } catch (error) {
      console.log("Failed to connect to DB")
    }
  });
}

export default startServer