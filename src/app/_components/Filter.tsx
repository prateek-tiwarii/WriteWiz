"use client";
import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { HoverEffect } from "@/components/ui/card-hover-effect";

const CategoryMenubar = () => {
  const categories = [
    { id: 'all', label: 'All', value: 'all' },
    { id: 'AI', label: 'AI', value: 'AI' },
    { id: 'Web3', label: 'Web 3', value: 'Web3' },
    { id: 'DevOPS', label: 'Dev Ops', value: 'DevOPS' },
    { id: 'CyberSecurity', label: 'Cyber Security', value: 'CyberSecurity' },
    { id: 'Finance', label: 'Finance', value: 'Finance' },
    { id: 'MachineLearning', label: 'Machine Learning', value: 'MachineLearning' },
    { id: 'DataScience', label: 'Data Science', value: 'DataScience' },
  ];

  const [activeCategory, setActiveCategory] = useState('all');
  const [blogs, setBlogs] = useState([]);

  const updateByCategory = async (category) => {
    try {
      let response;
      if (category === 'all') {
        response = await axios.get('/api/getAllBlogs');
      } else {
        response = await axios.get(`/api/getByCategory?category=${category}`);
      }
      setBlogs(response.data);
      
    } catch (error) {
      
      setBlogs([]);
      
    }
  };

  useEffect(() => {
    updateByCategory(activeCategory);
  }, [activeCategory]);

  const { data: session, status } = useSession();
  const router = useRouter();

  return (
    <>
      <div className='flex justify-between mx-7'>
        <h1 className='text-4xl font-semibold flex mx-7'>Recent Blogs</h1>

        {session && (
          <button 
            className='border text-xl border-white rounded-2xl bg-gray-950 p-2' 
            onClick={() => router.push('/create-blog')}
          >
            Create Blog +
          </button>
        )}
      </div>
      <div className='flex flex-row justify-between mx-7'> 
        <div className="w-full max-w-4xl justify-around mx-7 py-4"> 
          <h3 className='text-2xl font-normal'>Sort by category</h3>    
          <nav className="flex overflow-x-auto py-2 no-scrollbar">
            <ul className="flex space-x-2 sm:space-x-4">
              {categories.map((category) => (
                <li key={category.id}>
                  <button
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors
                      ${activeCategory === category.id 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                  >
                    {category.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Blog Cards Section */}
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
    </>
  );
};

export default CategoryMenubar;