import env from "dotenv";
import format from "string-format";
import api from "./api.js";

env.config();

export default async (args) => {
  console.log(args);
  try {
    let url = format(process.env.BASE_URL, `/api/Account/StudentSignup`);
    let input = {
      DisplayName: `${args.firstname} ${args.lastname}`,
      Email: args.username,
      Password: args.password,
    };
    console.log(input);
    return await api({
      url,
      headers: { "Content-Type": "application/json", },
      input: JSON.stringify(input),
    });
  } catch (e) {
    console.log(e);
  }
};
