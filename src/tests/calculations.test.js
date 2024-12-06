import {
  calculateExpenses,
  calculateNetProfitMargin,
  calculateRevenue,
} from "../helpers/calculations";

const data = [
  { account_category: "revenue", total_value: 100 },
  { account_category: "revenue", total_value: 200 },
  { account_category: "expense", total_value: 50 },
];

describe("Calculation Test Cases: ", () => {
  it("Calculates Total revenue", () => {
    expect(calculateRevenue(data)).toBe(300);
  });

  it("Calculates Total Expenses", () => {
    expect(calculateExpenses(data)).toBe(50);
  });

  it("Calculates Net Profit Margin", () => {
    expect(calculateNetProfitMargin(data)).toBe("0.8%");
  });
});
