"use server";
import dbConnect from "@/database/dbConnect";
import Project from "@/schemas/Projects";

dbConnect();

export async function getProjects() {
  try {
    return Project.find({});
  } catch (error: any) {
    return { error: error.message };
  }
}
