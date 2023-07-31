import { initializeAgentExecutorWithOptions } from "langchain/agents";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { SerpAPI } from "langchain/tools";
import { Calculator } from "langchain/tools/calculator";

export const run = async () => {
  const executor = await initializeAgentExecutorWithOptions(
    [new Calculator(), new SerpAPI()],
    new ChatOpenAI({ modelName: "gpt-3.5-turbo", temperature: 0 }),
    {
      agentType: "openai-functions",
      verbose: true,
    }
  );

  const result = await executor.run("What is the temperature in New York?");
  console.log(result);
};


// result

// [chain/end] [1:chain:AgentExecutor] [12.68s] Exiting Chain run with output: {
//     "output": "The current temperature in New York City is 75°F."
//   }