import { OpenAI } from "openai";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = 8080;
app.use(bodyParser.json());
app.use(cors());
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

const openai = new OpenAI({
  organization: process.env.REACT_APP_ORGANIZATION,
  apiKey: process.env.REACT_APP_API_KEY,
});

app.post("/", async (request, response) => {
  const { chats } = request.body;

  const chatCompletion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: "Hello!" }],
  });

  console.log(chatCompletion.choices[0].message);

  response.json({
    output: result.data.choices[0].message,
  });
});
