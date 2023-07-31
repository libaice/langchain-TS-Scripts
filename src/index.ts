import path from "path";
const [exampleName, ...args] = process.argv.slice(2);
console.log(exampleName, ...args);
let runExample;
try {
  ({ run: runExample } = require(path.join(__dirname, exampleName)));
} catch {
  throw new Error(`could not find example ${exampleName}`);
}
runExample();
