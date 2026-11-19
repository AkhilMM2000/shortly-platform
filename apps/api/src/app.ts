import cors from 'cors'
import express from 'express'
import helmet from 'helmet'

import { env } from './config/env.js'
import { errorHandler, notFoundHandler } from './middlewares/error-handler.js'
import { apiRouter } from './routes/index.js'

export const app = express()

app.use(helmet())
app.use(cors({ origin: env.corsOrigin }))
app.use(express.json())

app.use('/api', apiRouter)

app.use(notFoundHandler)
app.use(errorHandler)
