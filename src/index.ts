import "dotenv/config";
import moment from "moment";

import Env from "./Env";
import Twitter from "./Twitter";

const initialDate = moment("2021-11-14");
const today = moment();
const count = today.diff(initialDate, "days");

const twitter = new Twitter({
  apiKey: Env.API_KEY,
  apiKeySecret: Env.API_KEY_SECRET,
  accessToken: Env.ACCESS_TOKEN,
  accessTokenSecret: Env.ACCESS_TOKEN_SECRET,
});

(async () => {
  await twitter.tweet(`Bom dia🌻\n\nDia ${count} - Já saí do brasil? NÃO!`);
})();
