import express from 'express'
import cors from 'cors'
import { routes } from './routes'
import connection from './config/database'

const app = express()
const port = 3000
app.use(cors())

app.use(express.json())

connection
  .then(() => {
    console.log('database is connected')
    app.listen(port, () => {
      console.log(` 🚀 Server is running on port ${port}`)
    })
  })
  .catch((err) => console.log(err))

app.use(routes)
