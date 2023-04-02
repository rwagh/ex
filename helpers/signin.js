import env from "dotenv";
import format from "string-format";
import api from "./api.js";

env.config();

export default async (username, password) => {
  try {
    let url = format(process.env.BASE_URL, `/connect/token`);
    
    var urlencoded = new URLSearchParams();
    urlencoded.append("username", username);
    urlencoded.append("password", password);
    urlencoded.append("client_id", process.env.CLIENT_ID);
    urlencoded.append("grant_type", "password");
    urlencoded.append("scope", "openid email profile offline_access");

    return await api({
      url,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      input: urlencoded,
    });
  } catch (e) {
    console.log(e);
  }
};
