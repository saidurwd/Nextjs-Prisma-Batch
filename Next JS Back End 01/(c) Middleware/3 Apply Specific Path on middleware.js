import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(req) {
    console.log("I am middleware ")
    console.log(req.method)
    console.log(req.url)
    return NextResponse.next()
}
export const config = {
    matcher: '/api/:path*',
}