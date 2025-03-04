"use client";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import axios from "axios";
import { img } from "framer-motion/client";
import React, { useEffect } from "react";

export function CardHoverEffectDemo() {

    
  const [blogs, setBlogs] = React.useState<any[]>([]); 

  const getBlogs = async () => {
      try {
          const response = await axios.get('/api/getAllBlogs');
          setBlogs(response.data);
      } catch (error) {
          console.error('Error fetching blogs:', error);
          setBlogs([]);
      }
  }

  
  useEffect(() => {
          getBlogs();
      
  }, []);
  return (
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
  );
}

