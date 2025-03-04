import Blog from "@/models/blogSchema";
import User from "@/models/userSchema";
import { connectToDB } from "@/utils/connectToDB";

import { auth } from "@/auth";
import { NextResponse } from "next/server";

export async function GET(){
    try{
        await connectToDB();

        

     const blogs = await Blog.find() || [];



        return NextResponse.json(blogs, { status: 200 });



    }catch(err){
        console.log(err);
        return NextResponse.json({status: 500, data: {message: "Internal Server Error"}});
    }
}