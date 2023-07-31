import { OpenAI } from "langchain/llms/openai";
import { BufferMemory } from "langchain/memory";
import { ConversationChain } from "langchain/chains";

export const run = async () => {
  const model = new OpenAI({});
  const memory = new BufferMemory();
  const chain = new ConversationChain({
    llm: model,
    memory,
    verbose: true,
  });
  const res1 = await chain.call({ input: "Hi! I'm Jim." });
  console.log(res1);

  const res2 = await chain.call({ input: "What is my name ?" });
  console.log(res2);
};
