import { NextResponse } from 'next/server'
import { headers } from 'next/headers'

export async function POST(req,res) {

    const headersList = headers()
    const Token = headersList.get('Token')
    return NextResponse.json({ Token: Token})

}


