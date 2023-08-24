import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(req,res) {
    if (req.nextUrl.pathname.startsWith('/api/example1')) {
        const response=NextResponse.next();
        response.headers.set('Token', 'example1-XYZ-ABC')
        return response
    }
    if (req.nextUrl.pathname.startsWith('/api/example2')) {
        const response=NextResponse.next();
        response.headers.set('Token', 'example2-XYZ-ABC')
        return response
    }
}
