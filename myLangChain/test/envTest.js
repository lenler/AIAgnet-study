import { load } from "dotenv";
const env = await load();

const process = {
  env,
};

console.log(process.env.OPENAI_API_KEY);
