import { NextResponse } from 'next/server'

export async function GET(req,res) {

    const { searchParams } = new URL(req.url)
    const id = searchParams.get('id')
    return NextResponse.json({ status:true, message:id})
}


export async function POST(req,res) {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get('id')
    const name = searchParams.get('name')
    const city = searchParams.get('city')
    return NextResponse.json({ id:id,name:name,city:city })
}


