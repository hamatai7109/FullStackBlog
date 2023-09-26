import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

// DB接続に必要なmain関数
const prisma = new PrismaClient();

export async function main() {
  try{
    await prisma.$connect();
  }catch(err){
    return Error("DB接続に失敗しました。")
  }
}

// ブログの全記事取得用API
export const GET = async (req : Request , res : NextResponse) => {
  try{
    await main(); //DB接続
    const posts = await prisma.post.findMany(); //Postモデルの全記事を取得（findMany）
    return NextResponse.json({message : "Success" , posts} , {status: 200}); //NextResponse は res.state()~~と同じ意味
  }catch(err){
    return NextResponse.json({message: "Error" , err}, {status: 500});
  }finally{
    await prisma.$disconnect();//DB接続を切る。
  }
}

// ブログ投稿用API
export const POST = async (req : Request , res : NextResponse) => {
  try{
    const {title, description} = await req.json(); //以前は、req.body()だった。

    await main(); //DB接続
    const post = await prisma.post.create({data: {title, description}}); //Postモデルに記事を作成（create）
    return NextResponse.json({message : "Success" , post} , {status: 201}); //リソースの作成に成功→201
  }catch(err){
    return NextResponse.json({message: "Error" , err}, {status: 500});
  }finally{
    await prisma.$disconnect();//DB接続を切る。
  }
}