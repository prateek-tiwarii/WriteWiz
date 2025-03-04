"use client"
import React, { useEffect } from 'react'
import { HoverEffect } from "@/components/ui/card-hover-effect";

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import axios from 'axios';
const page = () => {

    


    const {data: session} = useSession();
    const router = useRouter();

    
    const [blogs, setBlogs] = React.useState<any[]>([]); 

    const getBlogs = async () => {
        try {
            const response = await axios.get('/api/getBlogById');
            setBlogs(response.data);
        } catch (error) {
            console.error('Error fetching blogs:', error);
            setBlogs([]);
        }
    }

    
    useEffect(() => {
        if (session) {
            getBlogs();
        }
    }, [session]);

  return (
    <div className='mt-28'>

     <div className='flex justify-between items-center gap-8 mx-6'>
   
   
    <div className=' border border-white p-4 rounded-3xl flex justify-start items-center max-w-[30%] gap-8 '>
        <img src="/profile.png" alt="profile picture" className='size-24 rounded-[80%]'/>
        <div>
            <h2 className='text-lg font-semibold'>{session?.user.name}</h2>
            <p className='text-lg font-semibold'>{session?.user.email}</p>
        </div>
    </div>
   
    { session && <button className=' border text-xl border-white rounded-2xl bg-gray-950 p-2 ' onClick= {()=>{router.push('/create-blog')}} >Create Blog +</button>}
    
    </div>
      
      <div className='my-11'>
    <h1 className='text-3xl font-bold flex justify-start mx-7'>My Blogs</h1>

    <div className="max-w-8xl mx-auto px-8">
          <HoverEffect 
                        items={blogs.map(blog => ({
                            img: blog.img || "/bg.jpg", 
                            title: blog.title,
                            description: blog.content.length > 100 
                                ? blog.content.substring(0, 100) + '...' 
                                : blog.content,
                            publishedAt: new Date(blog.publishedAt).toLocaleDateString(),
                            link: `/blog/${blog._id}` 
                        }))} 
                    />
        </div>

        </div>


    </div>
  )
}


export const projects = [
    {
      img : "https://picsum.photos/id/237/200/300",
      title: "Stripe",
      publishedAt: "2021-03-16",
      description:
        "A technology company that builds economic infrastructure for the internet.",
      link: "https://stripe.com",
    },
    {
      img : "https://picsum.photos/id/237/200/300",
      title: "Netflix",
      publishedAt: "2021-03-16",
      description:
        "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
      link: "https://netflix.com",
    },
    
   
  ];
  

export default page