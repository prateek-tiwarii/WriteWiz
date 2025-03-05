import { connectToDB } from "@/utils/connectToDB";
import User from "@/models/userSchema";
import { NextResponse } from "next/server";
import Blog from "@/models/blogSchema";
import { auth } from "@/auth";

export async function DELETE(req: Request , {params}: {params : {id :string}}){
    try{
        await connectToDB();

        const session = await auth();

        if(!session){
            return NextResponse.json({status: 401, data: {message: "Unauthorized"}});
        }

        const BlogId = params.id;

        const deleteblog = await Blog.findByIdAndDelete(BlogId);

        if(!deleteblog){
            return NextResponse.json({status: 404, data: {message: "Blog not found"}});
        }

        return NextResponse.json({status: 200, data: {message: "Blog deleted successfully"}});
    }
    catch(err){
        console.log(err);
        return NextResponse.json({status: 500, data: {message: "Internal Server Error"}});
    }
}