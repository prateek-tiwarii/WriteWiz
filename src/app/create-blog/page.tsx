// "use client";
// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import { toast, ToastContainer } from "react-toastify";
// import { BotMessageSquare } from "lucide-react";
// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
// import { cn } from "@/lib/utils";

// const categories = [
//   { id: "ai", label: "AI" },
//   { id: "web3", label: "Web 3" },
//   { id: "devops", label: "Dev Ops" },
//   { id: "cybersecurity", label: "Cyber Security" },
//   { id: "blockchain", label: "Blockchain" },
//   { id: "finance", label: "Finance" },
// ];

// const CreateBlog = () => {
//   const router = useRouter();

//   const [clicked , setClicked] = useState(false);

//   const handleClick = () => {
//     setClicked(!clicked);
//   }

//   const [formData, setFormData] = useState({
//     title: "",
//     content: "",
//     category: "",
//     img: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleCategoryChange = (value) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       category: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!formData.title || !formData.content || !formData.category || !formData.img) {
//       toast.error("All fields are required");
//       return;
//     }

//     try {
//       console.log("Blog Data:", formData);
//       toast.success("Blog Created Successfully");
//       router.push("/");
//     } catch (err) {
//       console.error(err);
//       toast.error("Something went wrong");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-black dark:bg-gray-900 mt-11">
//       <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black relative">
//         <button className="absolute top-20 right-4 flex items-center gap-2 border border-black text-black rounded-xl px-3 py-1 text-sm ">
//           Generate Using AI <BotMessageSquare className="w-4 h-4" onClick={handleClick} />
//         </button>

//         {clicked ?(<div className="bg-white dark:bg-black p-4 rounded-lg shadow-lg absolute top-28 right-4 w-80">
//             <p>Genrate content in a Wizz</p>
//             <form onSubmit={handleSubmit}>
//           <LabelInputContainer className="mb-4 ">
//             <Label htmlFor="title">Title</Label>
//             <Input
//               id="title"
//               type="text"
//               name="title"
//               className="border border-gray-300 p-2 rounded-lg"
//               onChange={handleChange}
//               value={formData.title}
//             />
//           </LabelInputContainer>

//           <LabelInputContainer className="mb-4">
//             <Label htmlFor="content">Content</Label>
//             <textarea
//               id="content"
//               name="content"
//               className="border border-gray-300 text-black p-2 rounded-lg w-full h-40 resize-none overflow-y-auto"
//               onChange={handleChange}
//               value={formData.content}
//             />
//           </LabelInputContainer>

//           <button
//             className="bg-gradient-to-br from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 w-full text-white rounded-md h-10 font-medium shadow-md"
//             type="submit"
//           >
//             Submit &rarr;
//           </button>
//         </form>

//         </div>):(<div></div>)}

//         <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 mb-8">Create A Blog Post</h2>

//         <form onSubmit={handleSubmit}>
//           <LabelInputContainer className="mb-4 ">
//             <Label htmlFor="title">Title</Label>
//             <Input
//               id="title"
//               type="text"
//               name="title"
//               className="border border-gray-300 p-2 rounded-lg"
//               onChange={handleChange}
//               value={formData.title}
//             />
//           </LabelInputContainer>

//           <LabelInputContainer className="mb-4">
//             <Label htmlFor="content">Content</Label>
//             <textarea
//               id="content"
//               name="content"
//               className="border border-gray-300 text-black p-2 rounded-lg w-full h-40 resize-none overflow-y-auto"
//               onChange={handleChange}
//               value={formData.content}
//             />
//           </LabelInputContainer>

//           <LabelInputContainer className="mb-4">
//             <Label htmlFor="category">Category</Label>
//             <select
//               id="category"
//               name="category"
//               className="w-full p-2 border border-gray-300 rounded-lg bg-white text-black"
//               value={formData.category}
//               onChange={(e) => handleCategoryChange(e.target.value)}
//             >
//               <option value="" disabled>Select a category</option>
//               {categories.map((category) => (
//                 <option key={category.id} value={category.label}>
//                   {category.label}
//                 </option>
//               ))}
//             </select>
//           </LabelInputContainer>

//           <LabelInputContainer className="mb-4">
//             <Label htmlFor="img">Image URL</Label>
//             <Input
//               id="img"
//               type="text"
//               name="img"
//               className="border border-gray-300 p-2 rounded-lg"
//               onChange={handleChange}
//               value={formData.img}
//             />
//           </LabelInputContainer>

//           <button
//             className="bg-gradient-to-br from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 w-full text-white rounded-md h-10 font-medium shadow-md"
//             type="submit"
//           >
//             Submit &rarr;
//           </button>
//         </form>
//       </div>

//       <ToastContainer />
//     </div>
//   );
// };

// export default CreateBlog;

// const LabelInputContainer = ({ children, className }) => {
//   return <div className={cn("flex flex-col space-y-2 w-full", className)}>{children}</div>;
// };

"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import { BotMessageSquare, X, RefreshCw } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const categories = [
  { id: "ai", label: "AI" },
  { id: "web3", label: "Web 3" },
  { id: "devops", label: "Dev Ops" },
  { id: "cybersecurity", label: "Cyber Security" },
  { id: "blockchain", label: "Blockchain" },
  { id: "finance", label: "Finance" },
];

const CreateBlog = () => {
  const router = useRouter();
  const [showAIForm, setShowAIForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: "",
    img: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.content || !formData.category || !formData.img) {
      toast.error("All fields are required");
      return;
    }

    try {
      console.log("Blog Data:", formData);
      toast.success("Blog Created Successfully");
      router.push("/");
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    }
  };

  const handleRegenerate = () => {
    setIsRegenerating(true);
    
    // Simulate AI regeneration
    setTimeout(() => {
      // Here you would actually call your AI generation API
      toast.success("Content regenerated");
      setIsRegenerating(false);
    }, 1500);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black/50 backdrop-blur-lg dark:bg-gray-900 mt-11 relative">
      {/* Main Form (visible but blurred when AI Form is open) */}
      <div
        className={`max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black relative transition-all duration-300 ${
          showAIForm ? "filter blur-sm scale-95 opacity-50" : "z-30"
        }`}
      >
        {/* AI Generate Button (Only Show in Main Form) */}
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

        {/* Main Form */}
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
              name="img"
              className="border border-gray-300 p-2 rounded-lg"
              onChange={handleChange}
              value={formData.img}
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

      {/* AI Form (Appears on top of blurred main form) */}
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

          <form onSubmit={handleSubmit} className="">
            <LabelInputContainer className="mb-4">
              <Label htmlFor="aiTitle">Title</Label>
              <Input
                id="aiTitle"
                type="text"
                name="title"
                className="border border-gray-300 p-2 rounded-lg"
                onChange={handleChange}
                value={formData.title}
                placeholder="Enter a topic or leave blank for AI suggestions"
              />
            </LabelInputContainer>

            <LabelInputContainer className="mb-4">
              <Label htmlFor="aiContent">Content</Label>
              <textarea
                id="aiContent"
                name="content"
                className="border border-gray-300 text-black p-2 rounded-lg w-full h-40 resize-none overflow-y-auto"
                onChange={handleChange}
                value={formData.content}
                placeholder="AI generated content will appear here"
              />
            </LabelInputContainer>

            <div className="flex gap-2 mb-4">
              <button
                className="bg-black text-white w-2/3 rounded-md h-10 font-medium shadow-md"
                type="submit"
              >
                Submit &rarr;
              </button>
              
              <button
                type="button"
                className={`border border-black flex items-center justify-center gap-2 w-1/3 rounded-md h-10 font-medium ${
                  isRegenerating ? "opacity-70" : ""
                }`}
                onClick={handleRegenerate}
                disabled={isRegenerating}
              >
                {isRegenerating ? (
                  <RefreshCw className="w-4 h-4 animate-spin" />
                ) : (
                  <>
                    Regenerate <RefreshCw className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      )}

      <ToastContainer />
    </div>
  );
};

export default CreateBlog;

const LabelInputContainer = ({ children, className }) => {
  return <div className={cn("flex flex-col space-y-2 w-full", className)}>{children}</div>;
};