import { NextResponse } from 'next/server'

export async function GET() {
    return NextResponse.json({ status:true, message:"From GET response"})
}

export async function POST() {
    return NextResponse.json({ status:true, message:"From POST response"})
}

export async function PUT() {
    return NextResponse.json({ status:true, message:"From PUT response"})
}

export async function DELETE() {
    return NextResponse.json({ status:true, message:"From DELETE response"})
}