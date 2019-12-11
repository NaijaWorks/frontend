import { Skill } from "./Skill";
import { Project } from "./Project";

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  showEmail: boolean;
  phone: string;
  showPhone: boolean;
  password: string;
  location: string;
  role: string;
  shortBio: string;
  longBio: string;
  token: string;
  skills: Skill;
  projects: Project
}