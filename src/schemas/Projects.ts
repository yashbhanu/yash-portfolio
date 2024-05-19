import mongoose, { Document, Model, Schema } from "mongoose";

export interface IProject extends Document {
  projectName: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink: string;
  projectLink?: string;
}

const ProjectSchema: Schema<IProject> = new mongoose.Schema({
  projectName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  technologies: {
    type: [String],
    required: true,
  },
  githubLink: {
    type: String,
    required: true,
  },
  projectLink: {
    type: String,
  },
});

const Project: Model<IProject> = mongoose.model<IProject>(
  "projects",
  ProjectSchema,
  "projects",
  {
    overwriteModels: true,
  }
);

export default Project;
