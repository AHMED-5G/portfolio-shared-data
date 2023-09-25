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



export namespace UserAPI {
  //signup
  namespace Signup {
    type RequireData = {
      email: string;
      password: string;
    };
  }

  //Login
  namespace Login {
    type SuccessObject = {
      jwt: JSONWebTokenType;
    };
    type RequireData = {
      email: string;
      password: string;
    };
  }

  //reset password
  namespace ResetPassword {
    type RequireData = {
      code: string;
      newPassword: string;
      email: string;
    };
  }

  //me
  namespace Me {
    interface SuccessObject
      extends Readonly<Required<Omit<IUser, "password">>> {}

    type RequireData = {
      jwt: string;
    };
  }
}

