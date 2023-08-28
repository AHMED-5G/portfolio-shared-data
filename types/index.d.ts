export interface IUser {
  id?: number;
  name?: string;
  email: string;
  password: string;
  userName?: string;
}

export interface ApiResponseError {
  codeMessage: string;
}
interface ApiResponse<T extends object> {
  status: boolean;
  data: T;
  error?: ApiResponseError;
}

export type JSONWebTokenType = string;
