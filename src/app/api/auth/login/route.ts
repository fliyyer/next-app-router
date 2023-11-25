import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    console.log(request);
    const data = await request.json();
    return NextResponse.json({ status: 200, message: "Success", data });
}