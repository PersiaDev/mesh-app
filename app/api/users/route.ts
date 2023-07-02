import { NextResponse } from "next/server"

const url = "https://gorest.co.in/public/v2/users"

export async function GET() {
  const res = await fetch(url)
  const users: User[] = await res.json()
  return NextResponse.json(users)
}


