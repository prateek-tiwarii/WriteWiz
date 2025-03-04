import Blog from "@/models/blogSchema";
import User from "@/models/userSchema";
import { connectToDB } from "@/utils/connectToDB";

import { auth } from "@/auth";
import { NextResponse } from "next/server";

export async function GET(){
    try{
        await connectToDB();

        const session = await auth();

        if(!session){
            return NextResponse.json({status: 401, data: {message: "Unauthorized"}});
        }
       

        const userId = session.user.id;

const blogs = await Blog.find({ publisher: userId }) || [];



        return NextResponse.json(blogs, { status: 200 });



    }catch(err){
        console.log(err);
        return NextResponse.json({status: 500, data: {message: "Internal Server Error"}});
    }
}