/** Command-line tool to generate Markov text. */
const fs = require("fs");
const MarkovMachine = require("./markov");
const axios = require("axios");

const generateText = (text) => {
  let markovMachine = new MarkovMachine(text);
  console.log(markovMachine.makeText());
};

const makeText = (path) => {
  fs.readFile(path, "utf8", (err, data) => {
    if (err) {
      console.error(`Cannot read file: ${path}: ${err}`);
      process.exit(1);
    } else {
      generateText(data);
    }
  });
};

const makeURLText = async (url) => {
  try {
    const res = await axios.get(url);
    generateText(res.data);
  } catch (err) {
    console.error(`Cannot read URL: ${url}: ${err}`);
    process.exit(1);
  }
};

let [method, source] = process.argv.slice(2);
if (method === "file") {
  makeText(source);
} else if (method === "url") {
  makeURLText(source);
} else {
  console.error(`Unknown method: ${method}`);
  process.exit(1);
}
