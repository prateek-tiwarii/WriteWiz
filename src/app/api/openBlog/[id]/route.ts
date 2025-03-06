import { connectToDB } from "@/utils/connectToDB";
import Blog from "@/models/blogSchema";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectToDB();

    const blog = await Blog.findById(params.id).exec();
    if (!blog) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(blog, { status: 200 });
  } catch (err) {
    console.error("Error fetching blog:", err);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}