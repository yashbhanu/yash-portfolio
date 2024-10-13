import mongoose, { Document, Model, Schema } from "mongoose";

interface IBlog extends Document {
  blogName: string;
  description: string;
  tags: string[];
  link: string;
  coverImage: string;
}

const BlogSchema: Schema<IBlog> = new mongoose.Schema({
  blogName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  coverImage: {
    type: String,
    required: true,
  },
});

const Blog = mongoose.model<IBlog>("blogs", BlogSchema, "blogs", {
  overwriteModels: true,
});
export default Blog;
