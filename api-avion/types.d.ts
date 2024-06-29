import { Model, Types } from 'mongoose';

export interface UserFields {
  email: string;
  password: string;
  token: string;
  role: string;
  displayName: string;
  avatar: string | null;
  googleID?: string;
}

export interface UserCheck {
  _id: Types.ObjectId;
  role: string;
}

interface UserMethods {
  checkPassword(password: string): Promise<boolean>;
  generateToken(): void;
}

type UserModel = Model<UserFields, unknown, UserMethods>;
