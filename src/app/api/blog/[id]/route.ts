import { NextResponse } from "next/server";
import { main } from "../route";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// ブログ詳細記事取得用API
export const GET = async (req : Request , res : NextResponse) => {
  try{
    //「req.url」でurl（http://localhost:3000/api/blog/3）を取得。
    //「.split("/blog/")」でurlを分割して配列化させる。→ ["http://localhost:3000/api/blog/", "3"]
    //[1]を指定することで、「3」を取得。→ parseInt(整数化)
    const id: number = parseInt(req.url.split("/blog/")[1]); 

    await main(); //DB接続
    const post = await prisma.post.findFirst({ where: { id } }); //http://localhost:3000/api/blog/1   :: 「1」の部分をidとして取得したい。 findFirst()：1つだけ記事を取得
    return NextResponse.json({message : "Success" , post} , {status: 200}); 
  }catch(err){
    return NextResponse.json({message: "Error" , err}, {status: 500});
  }finally{
    await prisma.$disconnect();//DB接続を切る。
  }
}

// ブログ詳細編集API
export const PUT = async (req : Request , res : NextResponse) => {
  try{
    const id: number = parseInt(req.url.split("/blog/")[1]); 

    const { title, description } = await req.json();

    await main(); //DB接続
    const post = await prisma.post.update({
      data: {title, description},
      where: { id }
    }); 
    return NextResponse.json({message : "Success" , post} , {status: 200}); 
  }catch(err){
    return NextResponse.json({message: "Error" , err}, {status: 500});
  }finally{
    await prisma.$disconnect();//DB接続を切る。
  }
}

// ブログ削除API
export const DELETE = async (req : Request , res : NextResponse) => {
  try{
    const id: number = parseInt(req.url.split("/blog/")[1]); 

    await main(); //DB接続
    const post = await prisma.post.delete({
      where: { id },
    }); 
    return NextResponse.json({message : "Success" , post} , {status: 200}); 
  }catch(err){
    return NextResponse.json({message: "Error" , err}, {status: 500});
  }finally{
    await prisma.$disconnect();//DB接続を切る。
  }
}