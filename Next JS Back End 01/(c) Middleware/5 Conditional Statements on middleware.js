import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(req) {
    if (req.nextUrl.pathname.startsWith('/api/example1')) {
        console.log("example1")
        return NextResponse.next()
    }
    if (req.nextUrl.pathname.startsWith('/api/example2')) {
        console.log("example2")
        return NextResponse.next()
    }
}

