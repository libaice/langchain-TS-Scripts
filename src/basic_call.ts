import { OpenAI } from "langchain/llms";

export const run = async () => {
  const model = new OpenAI({ temperature: 0.7 });
  const res = await model.call("what is the capital of australia ?");
  // value
  console.log(res);
  //Object
  console.log({ res });
};
