import { OpenAI } from "langchain/llms/openai";

export const run = async () => {
  const llm = new OpenAI({
    temperature: 0.9,
  });
  //   const result = await llm.call("what is the capital of Canana ?");
  const result = await llm.call(
    "What would be a good company name for a company that makes colorful socks?"
  );

  console.log(result);
};
