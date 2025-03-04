"use client";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

export default function BlogDetailPage() {
    const params = useParams();
    const [blog, setBlog] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const getBlogById = async (id: string) => {
        try {
            setIsLoading(true);
            const response = await axios.get(`/api/openBlog/${id}`);
            setBlog(response.data);
            setError(null);
        } catch (error) {
            console.error('Error fetching blog:', error);
            setError('Failed to fetch blog details');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (params.id) {
            getBlogById(params.id as string);
        }
    }, [params.id]);

    if (isLoading) return <div className="text-center mt-10">Loading blog...</div>;
    if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;
    if (!blog) return <div className="text-center mt-10">Blog not found</div>;

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <div className="mb-8">
                <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
                <div className="flex items-center space-x-4 text-gray-500">
                    <span>Published: {new Date(blog.publishedAt).toLocaleDateString()}</span>
                    <span>Category: {blog.category}</span>
                </div>
            </div>

            {blog.img && (
                <img 
                    src={blog.img} 
                    alt={blog.title} 
                    className="w-full h-96 object-cover rounded-lg mb-8"
                />
            )}

            <div className="prose dark:prose-invert max-w-none">
                <ReactMarkdown>{blog.content}</ReactMarkdown>
            </div>

            <div className="mt-8 flex items-center space-x-4">
                <span>Likes: {blog.likes || 0}</span>
            </div>
        </div>
    );
}