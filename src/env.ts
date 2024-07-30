import {z} from "zod"

console.log(process.env.OPEN_WEATHER_TOKEN)

const validator = z.object({OPEN_WEATHER_TOKEN: z.string()})
export const ENV = {OPEN_WEATHER_TOKEN:process.env.OPEN_WEATHER_TOKEN}