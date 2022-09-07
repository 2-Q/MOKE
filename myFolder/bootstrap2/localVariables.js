import { config as loadEnv } from 'dotenv'
loadEnv()

export default {
    port: Number((process.env.PORT) ?? 8000)
}