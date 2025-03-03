import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

const API_key = process.env.Gemni_API_KEY;

export async function POST(req , res){

    try{

    const {description} = req.json();

    if(!description){
        return NextResponse.json("Description is required");
    }

    const genAI = new GoogleGenerativeAI(API_key);
    const model = await genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const prompt = `create a blog post in about 1000-1200 words on this description: ${description} the content should be cisp and engaging`; 
    const result = await model.generateContent([prompt]);

    if(result&& result.response){
        const generatedText =  await result.response.text();
        return NextResponse.json({generatedText});

    }else {
      throw new Error('No response received from model.');
    }


} catch (error) {
    console.error('Error generating blog', error);
    return NextResponse.json({ error: 'Failed to generate blog' }, { status: 500 });
  }

}