import { ChatOpenAI } from "langchain/chat_models/openai";
import { HumanMessage, ChatMessage, SystemMessage } from "langchain/schema";

export const run = async () => {
  const chat = new ChatOpenAI({
    temperature: 0,
  });
  const result = await chat.predictMessages([
    new HumanMessage("Hello, how are you?"),
    new HumanMessage(
      "Translate this sentence from English to French. I love programming."
    ),
  ]);
  console.log(result);
  
};
