import { User } from "./User";

export interface Project {
  id: string;
  title: string;
  imageURL: string;
  description: string;
  projectURL: string;
  user: User
}