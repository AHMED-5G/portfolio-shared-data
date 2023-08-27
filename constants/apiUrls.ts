export const BASE_URL: string =
  process.env.NODE_ENV === "development"
    ? "http://127.0.0.1:3000"
    : "https://api.example.com";
export const USERS_URL: string = `${BASE_URL}/users`;
export const REGISTER_URL: string = `${BASE_URL}/register`;
//new2
