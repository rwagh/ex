import fetch from "node-fetch";
import env from "dotenv";
env.config();
export default async (options) => {
  //url, type, gql, token for now
  try {
    let headers = {
      "Accept-Encoding": "gzip, deflate",
    };
    if (options.headers) {
      Object.keys(options.headers).forEach((element) => {
        headers[element] = options.headers[element];
      });
    }
    if (options.token) {
      //will extend once token is consolidate
      headers["Authorization"] = `Bearer ${options.token}`;
    }
    let response = await fetch(options.url, {
      method: "POST",
      headers: headers,
      body: options.input,
    });
    
    let result = await response.json();
    console.log("api.result: ", result);
    return result;
  } catch (e) {
    console.log("api failed");
    console.log(e);
  }
};
