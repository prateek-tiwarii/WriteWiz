"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import { BotMessageSquare, X, RefreshCw } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import axios from "axios";

const categories = [
  { id: "ai", label: "AI" },
  { id: "web3", label: "Web3" },
  { id: "devops", label: "DevOps" },
  { id: "cybersecurity", label: "CyberSecurity" },
  { id: "blockchain", label: "DataScience" },
  { id: "finance", label: "Finance" },
  { id: "MachineLearning", label: "MachineLearning" },
];

export default function CreateBlog() {
  const router = useRouter();
  const [showAIForm, setShowAIForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: "",
    imgUrl: "",
  });
  const [aiForm, setAiForm] = useState({
    title: "",
    content: ""
  });
  const [isRegenerating, setIsRegenerating] = useState(false);

  const toggleAIForm = () => {
    setShowAIForm(!showAIForm);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCategoryChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      category: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.content || !formData.category || !formData.imgUrl) {
      toast.error("All fields are required");
      return;
    }

    try {
        const response =  axios.post('/api/publish', formData);
        console.log(response);
      toast.success("Blog Created Successfully");
      router.push("/");
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    }
  };

  const handleAiForm = (e) => {
    const { name, value } = e.target;
    setAiForm((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const generateContent = async () => {
    if (!aiForm.title) {
      toast.error("Please enter a title to generate content");
      return;
    }
    
    setIsRegenerating(true);
    
    try {
      const response = await axios.post('/api/ai', {description: aiForm.title});
      
      if (response && response.data) {
        setAiForm((prevData) => ({
          ...prevData,
          content: response.data.text || "Generated content will appear here."
        }));
        
        
        
        toast.success("Content generated successfully!");
      } else {
        toast.error("Failed to generate content");
      }
    } catch (error) {
      console.error("AI generation error:", error);
      toast.error("Error generating content");
    } finally {
      setIsRegenerating(false);
    }
  };

  const handleRegenerate = () => {
    generateContent();
  };

  const handleSubmitAiContent = (e) => {
    e.preventDefault();
    
    // Transfer AI form data to main form
    setFormData((prevData) => ({
      ...prevData,
      title: aiForm.title,
      content: aiForm.content
    }));
    
    // Close AI form
    setShowAIForm(false);
    
    toast.success("AI content applied to form");
  };

  const handleUse = (e)=>{
    // Update main form data as well
    setFormData((prevData) => ({
        ...prevData,
        title: aiForm.title,
        content: aiForm.content || ""
      }));

  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-black/50 backdrop-blur-lg dark:bg-gray-900 mt-11 relative">
     
      <div
        className={`max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black relative transition-all duration-300 ${
          showAIForm ? "filter blur-sm scale-95 opacity-50" : "z-30"
        }`}
      >
       
        {!showAIForm && (
          <button
            className="absolute top-5 right-4 flex items-center gap-2 border border-black text-black dark:text-white rounded-xl px-3 py-1 text-sm"
            onClick={toggleAIForm}
          >
            Generate Using AI <BotMessageSquare className="w-4 h-4" />
          </button>
        )}

        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 mb-8">
          Create A Blog Post
        </h2>

        
        <form onSubmit={handleSubmit}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              type="text"
              name="title"
              className="border border-gray-300 p-2 rounded-lg"
              onChange={handleChange}
              value={formData.title}
            />
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="content">Content</Label>
            <textarea
              id="content"
              name="content"
              className="border border-gray-300 text-black p-2 rounded-lg w-full h-40 resize-none overflow-y-auto"
              onChange={handleChange}
              value={formData.content}
            />
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="category">Category</Label>
            <select
              id="category"
              name="category"
              className="w-full p-2 border border-gray-300 rounded-lg bg-white text-black"
              value={formData.category}
              onChange={(e) => handleCategoryChange(e.target.value)}
            >
              <option value="" disabled>
                Select a category
              </option>
              {categories.map((category) => (
                <option key={category.id} value={category.label}>
                  {category.label}
                </option>
              ))}
            </select>
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="img">Image URL</Label>
            <Input
              id="img"
              type="text"
              name="imgUrl"
              className="border border-gray-300 p-2 rounded-lg"
              onChange={handleChange}
              value={formData.imgUrl}
            />
          </LabelInputContainer>

          <button
            className="bg-black text-white w-full rounded-md h-10 font-medium shadow-md"
            type="submit"
          >
            Submit &rarr;
          </button>
        </form>
      </div>

      
      {showAIForm && (
        <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black absolute z-40 transition-all duration-300 scale-105">
          {/* Close Button */}
          <button
            className="absolute top-5 right-5 text-gray-600 hover:text-black dark:hover:text-white transition"
            onClick={toggleAIForm}
          >
            <X className="w-6 h-6" />
          </button>

          <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 mb-6">
            Generate Blog with AI
          </h2>

          <form onSubmit={handleSubmitAiContent} className="">
            <LabelInputContainer className="mb-4">
              <Label htmlFor="aiTitle">Title</Label>
              <Input
                id="aiTitle"
                type="text"
                name="title"
                className="border border-gray-300 p-2 rounded-lg"
                onChange={handleAiForm}
                value={aiForm.title}
                placeholder="Enter a topic or leave blank for AI suggestions"
              />
            </LabelInputContainer>

            <LabelInputContainer className="mb-4">
              <Label htmlFor="aiContent">Content</Label>
              <textarea
                id="aiContent"
                name="content"
                className="border border-gray-300 text-black p-2 rounded-lg w-full h-40 resize-none overflow-y-auto"
                onChange={handleAiForm}
                value={aiForm.content}
                placeholder="AI generated content will appear here"
              />
            </LabelInputContainer>

            <div className="flex gap-2 mb-4">
              <button
                className="bg-black text-white w-1/2 rounded-md h-10 font-medium shadow-md"
                type="button"
                onClick={generateContent}
                disabled={isRegenerating}
              >
                {isRegenerating ? (
                  <span className="flex items-center justify-center">
                    Generating <RefreshCw className="w-4 h-4 animate-spin ml-2" />
                  </span>
                ) : (
                  "Generate Content"
                )}
              </button>
              
              <button
                type="button"
                className={`border text-black border-black flex items-center justify-center gap-2 w-1/4 rounded-md h-10 font-medium ${
                  isRegenerating ? "opacity-70" : ""
                }`}
                onClick={handleRegenerate}
                disabled={isRegenerating}
              >
                <RefreshCw className={`w-4 h-4 ${isRegenerating ? "animate-spin" : ""}`} />
              </button>
              
              <button
                className="bg-green-600 text-white w-1/4 rounded-md h-10 font-medium shadow-md"
                type="submit"
                onClick={handleUse}
              >
                Use
              </button>
            </div>
          </form>
        </div>
      )}

      <ToastContainer />
    </div>
  );
}

const LabelInputContainer = ({ children, className }) => {
  return <div className={cn("flex flex-col space-y-2 w-full", className)}>{children}</div>;
};