"use server";
import dbConnect from "@/database/dbConnect";
import Blog from "@/schemas/Blog";

dbConnect();

export async function getBlogs() {
  try {
    return Blog.find({}).exec();
  } catch (error: any) {
    return { error: error.message };
  }
}
