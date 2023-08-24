import { NextResponse } from 'next/server'

export async function POST(req,res) {

    const formData = await req.formData()

    let name=formData.get('name');
    let city=formData.get('city');

    return NextResponse.json({ name: name,city:city})

}


