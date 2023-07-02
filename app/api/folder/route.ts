import { NextResponse } from "next/server";

const endPoint: string = "folder"
const url = `${process.env.DATA_SOURCE_URL}/${endPoint}`

export async function GET() {
  const res = await fetch(url, {
    method: "GET",
    redirect: "follow",
    headers: {
      "Content-Type": "application/json",
      "x-api-token": process.env.DATA_API_VALUE as string,
    },
  })
  const folders: Folder[] = await res.json();

  console.log(res)

  return NextResponse.json({ folders });
}

export async function DELETE(request: Request) {
  const { id }: Partial<Folder> = await request.json()
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  
  if(!id) return NextResponse.json({
    'message': 'Folder id is required!'
  })

  await fetch(`${url}/${endPoint}`, {
    method: "DELETE",
    redirect: "follow",
    headers: myHeaders,
  })

  return NextResponse.json({ 'message': `The folder has been deleted!` });

}
