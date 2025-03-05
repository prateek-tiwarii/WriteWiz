import Blog from "@/models/blogSchema";
import User from "@/models/userSchema";
import { connectToDB } from "@/utils/connectToDB";

import { auth } from "@/auth";
import { NextResponse } from "next/server";

export async function GET(req :Request){
    try{
        await connectToDB();

        const { searchParams } = new URL(req.url);
        const category = searchParams.get("category");


        const blogs = category 
            ? await Blog.find({ category }) 
            : await Blog.find({});

        if (blogs.length === 0) {
            return NextResponse.json(
                { status: 404, data: { message: "No Blogs found" } }, 
                { status: 404 }
            );
        }

       

        return NextResponse.json(blogs, { status: 200 });

    }catch(err){
        console.log(err);
        return NextResponse.json({status: 500, data: {message: "Internal Server Error"}});
    }
}