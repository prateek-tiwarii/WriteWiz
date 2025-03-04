import { connectToDB } from "@/utils/connectToDB";
import Blog from "@/models/blogSchema";
import { NextResponse } from "next/server";

export async function GET(req : Request, {params}:{params :{id :string}}) {

    try{
        await connectToDB();

        const blog = await Blog.findById(params.id);
        if(!blog){
            return {status: 404, data: {message: "Blog not found"}};
        }
        return NextResponse.json(blog, { status: 200 });
    } catch(err){
        console.log(err);
        return NextResponse.json({status: 500, data: {message: "Internal Server Error"}});
    }

}