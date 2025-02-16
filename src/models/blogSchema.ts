import { object } from "framer-motion/client";
import mongoose, { Schema } from "mongoose";

const BlogSchema =  new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength : 32
    },

    img: {
        type: String,
        required: true
    },

    description :{
        type: String,
        required: true
    },
    publishedAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    category : {
        type: String,
        enum: ['AI', 'Web3', 'DevOPS','CyberSecurity','Finance','MachineLearning','DataScience',],
        required: true
    },
    publisher : {
        type: Schema.Types.ObjectId,
        ref : 'User',
        required: true

    }


})

const Blog = mongoose.models.Blog || mongoose.model('Blog', BlogSchema);

export default Blog;