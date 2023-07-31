import { initializeAgentExecutorWithOptions } from "langchain/agents";
import { OpenAI } from "langchain/llms/openai";
import { SerpAPI } from "langchain/tools";
import { Calculator } from "langchain/tools/calculator";

export const run = async () => {
  const model = new OpenAI({ temperature: 0 });
  const tools = [
    new SerpAPI(process.env.SERP_API_KEY, {
      location: "Austin,Texas,United States",
      hl: "en",
      gl: "us",
    }),
    new Calculator(),
  ];

  const executor = await initializeAgentExecutorWithOptions(tools, model, {
    agentType: "zero-shot-react-description",
    verbose: true,
  });

  const input =
    "What was the high temperature in SF yesterday in Fahrenheit? What is that number raised to the .023 power?";

  const result = await executor.call({
    input,
  });

  console.log(result);
};



// result

//  [llm/start] [1:chain:AgentExecutor > 8:chain:LLMChain > 9:llm:OpenAI] Entering LLM run with input: {  "prompts": [
//     "Answer the following questions as best you can. You have access to the following tools:\n\nsearch: a search engine. useful for when you need to answer questions about current events. input should be a search query.\ncalculator: Useful for getting the result of a math expression. The input to this tool should be a valid mathematical expression that could be executed by a simple calculator.\n\nUse the following format in your response:\n\nQuestion: the input question you must answer\nThought: you should always think about what to do\nAction: the action to take, should be one of [search,calculator]\nAction Input: the input to the action\nObservation: the result of the action\n... (this Thought/Action/Action Input/Observation can repeat N times)\nThought: I now know the final answer\nFinal Answer: the final answer to the original input question\n\nBegin!\n\nQuestion: What was the high temperature in SF yesterday in Fahrenheit? What is that number raised to the .023 power?\nThought: I 
// need to find the temperature first, then use the calculator to raise it to the .023 power.\nAction: 
// search\nAction Input: \"high temperature in SF yesterday\"\nObservation: San Francisco Temperature Yesterday. Maximum temperature yesterday: 71 °F (at 1:56 pm) Minimum temperature yesterday: 56 °F (at 5:21 am) Average temperature ...\nThought: I now have the temperature, so I can use the calculator 
// to raise it to the .023 power.\nAction: calculator\nAction Input: 71^.023\nObservation: 1.1030087103157373\nThought:"
//   ]
// }
// [llm/end] [1:chain:AgentExecutor > 8:chain:LLMChain > 9:llm:OpenAI] [2.90s] Exiting LLM run with output: {
//   "generations": [
//     [
//       {
//         "text": " I now know the final answer.\nFinal Answer: 1.1030087103157373",
//         "generationInfo": {
//           "finishReason": "stop",
//           "logprobs": null
//         }
//       }
//     ]
//   ],
//   "llmOutput": {
//     "tokenUsage": {
//       "completionTokens": 19,
//       "promptTokens": 351,
//       "totalTokens": 370
//     }
//   }
// }