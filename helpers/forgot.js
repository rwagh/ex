import format from "string-format";
import api from "./api.js";

import env from "dotenv";
env.config();
export default {

    forgot: async(email, token) => {
        console.log(email);
        console.log(token);
        try {
            let url = format(process.env.BASE_URL, `${process.env.IDENTITY}`);
            let gql = {
                query: "mutation Forgetpassword($email: String!) { forgetpassword(email: $email) {   success    message    code  }}",
                variables: {
                    email: email,
                },
            };
            console.log(gql);
            return await api({
                url,
                headers: { type: "CMS" },
                gql,
                token
            });

        } catch (err) {
            console.log(err);
        }
    },
}