import { getWeather } from "@/lib/weather";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request:NextRequest)=>{
    const {searchParams} = new URL(request.url) 
    const lat = searchParams.get("lat")
    const lon = searchParams.get("lon")
    
    if(!lat || !lon) return NextResponse.error()

    const apiData = await getWeather(+lon, +lat)
    return NextResponse.json(apiData)
}
