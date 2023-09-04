export interface IUser {
  id?: number;
  name?: string;
  email: string;
  password: string;
  userName?: string;
  createdAt?: string;
}

export interface ApiResponseError {
  codeMessage: string;
}
interface ApiResponse<SuccessT = unknown> {
  status: boolean;
  data: SuccessT;
  error?: ApiResponseError;
}

export type JSONWebTokenType = string;
