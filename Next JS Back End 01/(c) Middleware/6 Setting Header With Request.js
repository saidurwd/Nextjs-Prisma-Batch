import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(req) {
    if (req.nextUrl.pathname.startsWith('/api/example1')) {

        const requestHeaders = new Headers(req.headers)
        requestHeaders.set('Token', 'example1-XYZ-ABC')

        return  NextResponse.next({
            request: {headers: requestHeaders},
        })
    }
    if (req.nextUrl.pathname.startsWith('/api/example2')) {
        const requestHeaders = new Headers(req.headers)
        requestHeaders.set('Token', 'example2-XYZ-ABC')
        
        return  NextResponse.next({
            request: {headers: requestHeaders},
        })
    }
}

