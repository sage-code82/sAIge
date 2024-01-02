import { Configuration, OpenAIApi } from "openai";
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

const configuration = new Configuration({
  organization: "org-Q1QghoEq1nGB71jxZVJOMp7R",
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

app.post("/", async (request, response) => {});

const { chats } = request.body;

const result = await openai.creatChatCompletion({
  model: "gpt-3.5-turbo",
  messages: [
    {
      role: "system",
      content: "You are sAIge. A Chat GPT clone",
    },
    ...chats,
  ],
});

response.json({
  output: result.data.choices[0].message,
});
