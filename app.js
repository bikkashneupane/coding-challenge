import { dataParser } from "./src/utils/dataParser.js";

const filePath = "./src/data/data.json";

// Testing if file is being read properly
const main = async () => {
  const data = await dataParser(filePath);
  console.log(data);
};

main();
