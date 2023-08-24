import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request) {
    console.log("middleware")
    return NextResponse.next()
}