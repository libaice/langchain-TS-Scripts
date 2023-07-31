import { OpenAI } from "langchain/llms/openai";
import { LLMChain } from "langchain/chains";
import { PromptTemplate } from "langchain/prompts";

export const run = async () => {
  const llm = new OpenAI({});
  const prompt = PromptTemplate.fromTemplate(
    "What is a good name for a company that makes {product}?"
  );

  const chain = new LLMChain({
    llm,
    prompt,
  });

  const result = await chain.run("boats");
  console.log(result);
};
