import { PromptTemplate } from "langchain/prompts";

const prompt = PromptTemplate.fromTemplate(
  "What is a good name for a company that makes {product}?"
);

export const run = async () => {
  const formattedPrompt = await prompt.format({
    product: "boat",
  });
  console.log(formattedPrompt);
};
