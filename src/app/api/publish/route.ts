import { auth } from "@/auth";
import Blog from "@/models/blogSchema";
import { connectToDB } from "@/utils/connectToDB";

import { Session } from "next-auth";
import { getSession } from "next-auth/react";
import { NextResponse } from "next/server";

export async function POST(req ,res){

   await connectToDB();
   try{

    const session = await getSession(auth);

    if(!session){
      
        return NextResponse.json({error: "You need to be logged in to publish a blog"},{status: 401});

    }
    else{

    const {title ,content , imgUrl ,category  } = req.json();

    if(!title || !content || !imgUrl || !category){
        return NextResponse.json({error: "Please enter all fields"},{status: 400});

    }

    const author = session.user?.name;

    const createdBlog = await Blog.create({
        title,
        content,
        img : imgUrl,
        category,
        publisher :  author
    })

    createdBlog.save();

    return NextResponse.json({message: "Blog published successfully", blog: createdBlog},{status: 201});
    }

   }catch(err){
    console.log(err);
    return NextResponse.json({error: "Error in creating the blog"},{status: 500});
   }


}