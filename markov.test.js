const MarkovMachine = require("./markov");

let markovMachine;

beforeEach(() => {
  markovMachine = new MarkovMachine("the cat in the hat");
  markovMachine.makeChains();
});

describe("makeChains()", () => {
  it("Make chains out of the text provided", () => {
    expect(markovMachine.chains.has("the")).toEqual(true);
    expect(markovMachine.chains.has("cat")).toEqual(true);
    expect(markovMachine.chains.has("in")).toEqual(true);
    expect(markovMachine.chains.has("hat")).toEqual(true);
  });
});
