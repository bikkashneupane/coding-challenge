import {
  calculateExpenses,
  calculateGrossProfitMargin,
  calculateNetProfitMargin,
  calculateRevenue,
  calculateWorkingCapitalRatio,
} from "./src/helpers/calculations.js";
import { amountFormatter } from "./src/helpers/formatter.js";
import { dataParser } from "./src/utils/dataParser.js";

const filePath = "./src/data/data.json";

const main = async () => {
  try {
    // Reade the data/data.json file
    const rewardsData = await dataParser(filePath);
    const revenue = calculateRevenue(rewardsData.data);
    const expense = calculateExpenses(rewardsData.data);
    const grossProfitMargin = calculateGrossProfitMargin(rewardsData.data);
    const netProfitMargin = calculateNetProfitMargin(rewardsData.data);
    const workingCapitalRatio = calculateWorkingCapitalRatio(rewardsData.data);

    console.log("Revenue: ", amountFormatter(revenue));
    console.log("Expenses: ", amountFormatter(expense));
    console.log("Gross Profit Margin: ", grossProfitMargin);
    console.log("Net Profit Margin: ", netProfitMargin);
    console.log("Working Capital Ratio: ", workingCapitalRatio);
  } catch (error) {
    console.log("Error: ", error.message);
  }
};

main();
