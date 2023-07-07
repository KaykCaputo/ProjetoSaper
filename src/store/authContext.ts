import { createContext } from "react";

export type User = {
  user_id: number;
  username: string;
  email: string;
  basicAuth: string;
  roles: { authority: string }[];
};


export type AuthType = {
  user?: User;
  updateUser?(user: User | undefined): void;
  
};

const initialValue: AuthType = {};

export const AuthContext = createContext(initialValue);
