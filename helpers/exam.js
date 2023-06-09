import format from "string-format";
import env from "dotenv";
import api from "./api.js";
env.config();
export default {
  list: async (token) => {
    let url = format(process.env.BASE_URL, process.env.EXAM_LIST);
    return await api({
      url,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      input: JSON.stringify({}),
    });
  },
  get: async (token, id) => {
    let url = format(process.env.BASE_URL, process.env.EXAM);
    return await api({
      url,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      input: JSON.stringify({ EntityId: id }),
    });
  },
};
