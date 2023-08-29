import { IUser, JSONWebTokenType } from "../types";

//Login
export type RequestLoginSuccessObject = {
  jwt: JSONWebTokenType;
};
export type RequestLoginRequireData = {
  email: string;
  password: string;
};

//reset password
export type ResetPasswordRequireData = {
  code: string;
  newPassword: string;
  email: string;
};

//me
export interface MeSuccessObject
  extends Readonly<Required<Omit<IUser, "password">>> {}

export type MeRequireData = {
  jwt: string;
};
