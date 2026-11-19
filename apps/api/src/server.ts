import { app } from './app.js'
import { env } from './config/env.js'

app.listen(env.port, () => {
  console.log(`Shortly API is listening on port ${env.port}`)
})
