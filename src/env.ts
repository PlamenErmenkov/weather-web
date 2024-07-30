import {z} from "zod"

const validator = z.object({OPEN_WEATHER_TOKEN: z.string()})
export const ENV = {OPEN_WEATHER_TOKEN:process.env.OPEN_WEATHER_TOKEN}