import http from "./HttpService";
import jwtDecode from "jwt-decode";
import { getJwt } from "./AuthService";

export async function register(user) {
   const res = await http.post("/Register", user);
   localStorage.setItem("token", res.headers['x-token']);
   return;
}

export function getUser() {
   const jwt = getJwt();
      const user = jwtDecode(jwt);
      return user;
}
