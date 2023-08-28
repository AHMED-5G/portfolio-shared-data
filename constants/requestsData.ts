import { JSONWebTokenType } from "../types";

export type RequestLoginSuccessObject = {
  jwt: JSONWebTokenType;
};
export type RequestLoginRequireData = {
  email: string;
  password: string;
};
