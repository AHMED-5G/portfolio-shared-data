import { IUser, JSONWebTokenType } from "../types";

//signup
/**
 * @deprecated
 * you can use UserAPI.Signup.RequireData
 */
export type RequestSignupRequireData = {
  email: string;
  password: string;
};

//Login
/**
 * @deprecated
 * you can use UserAPI.Login.SuccessObject
 */
export type RequestLoginSuccessObject = {
  jwt: JSONWebTokenType;
};
/**
 * @deprecated
 * you can use UserAPI.Login.RequireData
 */
export type RequestLoginRequireData = {
  email: string;
  password: string;
};

//reset password
/**
 * @deprecated
 * you can use UserAPI.ResetPassword.SuccessObject
 */
export type ResetPasswordRequireData = {
  code: string;
  newPassword: string;
  email: string;
};

//me
/**
 * @deprecated
 * you can use UserAPI.Me.SuccessObject
 */
export interface MeSuccessObject
  extends Readonly<Required<Omit<IUser, "password">>> {}

/**
 * @deprecated
 * you can use UserAPI.Me.RequireData
 */
export type MeRequireData = {
  jwt: string;
};
