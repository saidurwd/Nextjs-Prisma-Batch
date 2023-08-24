import { NextResponse } from 'next/server'



export async function POST(req,res) {

    const JsonBody = await req.json()

    let name=JsonBody['name'];
    let city=JsonBody['city'];

    return NextResponse.json({ name: name,city:city})

}


