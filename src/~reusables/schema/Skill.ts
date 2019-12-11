import { User } from "./User";

export interface Skill {
  id: string;
  name: string;
  logo: string;
  user: User;
}