export interface IUser {
  id?: number;
  name?: string;
  email: string;
  password: string;
  userName?: string;
}

export interface ApiResponseError {
  codeMessage: string;
  codeError: string;
}
interface ApiResponse<T extends object> {
  status: boolean;
  code: number;
  data: T;
  error?: ApiResponseError;
}

export type JSONWebTokenType = string;
