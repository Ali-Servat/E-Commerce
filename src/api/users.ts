import { transformUser } from "./transformer";
import Parse from "parse/dist/parse.min.js";

export async function signUp(
  username: string,
  password: string,
  email: string
) {
  const userObject = new Parse.User();
  userObject.set("username", username);
  userObject.set("password", password);
  userObject.set("email", email);
  userObject.set("role", "customer");

  const response = await userObject.signUp();
  const user = transformUser(response);

  return user;
}

export async function Login(username: string, password: string) {
  const response = await Parse.User.logIn(username, password);
  const user = transformUser(response);
  return user;
}
