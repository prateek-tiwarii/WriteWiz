import mongoose from "mongoose";
import User from "@/models/userSchema";
import { connectToDB } from "@/utils/connectToDB";
import { NextResponse } from "next/server";

export async function  POST(req : Request){

    await connectToDB();

    try{

    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
        return NextResponse.json({ error: "Please enter all fields" },{status: 400});
    }

    if (password.length < 6) {
        return NextResponse.json({ error: "Password must be atleast 6 characters long" },{status: 400});
    }
   
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }


    else{
        const createdUser = await User.create({
            name,
            email,
            password,
        })

        

        return NextResponse.json({ message: "User created successfully" , user: createdUser },{status: 201});
    }
 
}catch(err){

    console.log(err);
    return NextResponse.json({ error: "Server Error" },{status: 500});
 }


}