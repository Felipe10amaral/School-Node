import { app } from './app'
import { env } from './env'

const port = 3000
app.listen(env.PORT, () => {
  console.log(`server is running on port ${port} `)
})
