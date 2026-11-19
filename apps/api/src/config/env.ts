import 'dotenv/config'

const port = Number.parseInt(process.env.PORT ?? '3000', 10)

export const env = {
  port: Number.isNaN(port) ? 3000 : port,
  corsOrigin: process.env.CORS_ORIGIN ?? 'http://localhost:5173',
}
