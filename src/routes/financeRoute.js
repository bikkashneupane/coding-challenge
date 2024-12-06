import { Router } from "express";
import {
  calculateExpenses,
  calculateGrossProfitMargin,
  calculateNetProfitMargin,
  calculateRevenue,
  calculateWorkingCapitalRatio,
} from "../helpers/calculations.js";
import { dataParser } from "../utils/dataParser.js";
import { amountFormatter } from "../helpers/formatter.js";

const router = Router();
const filePath = "./src/data/data.json";

router.get("/revenue", async (req, res) => {
  try {
    const rawData = await dataParser(filePath);
    const revenue = calculateRevenue(rawData.data);
    res
      .status(200)
      .json({ revenue: amountFormatter(revenue), message: "Get /api/finance" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/expense", async (req, res) => {
  try {
    const rawData = await dataParser(filePath);
    const expense = calculateExpenses(rawData.data);
    res
      .status(200)
      .json({ expense: amountFormatter(expense), message: "Get /api/expense" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/gross-profit-margin", async (req, res) => {
  try {
    const rawData = await dataParser(filePath);
    const grossProfitMargin = calculateGrossProfitMargin(rawData.data);
    res.json({ grossProfitMargin, message: "Get /api/gross-profit-margin" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/net-profit-margin", async (req, res) => {
  try {
    const rawData = await dataParser(filePath);
    const netProfitMargin = calculateNetProfitMargin(rawData.data);
    res
      .status(200)
      .json({ netProfitMargin, message: "Get /api/net-profit-margin" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/working-capital-ratio", async (req, res) => {
  try {
    const rawData = await dataParser(filePath);
    const workingCapitalRatio = calculateWorkingCapitalRatio(rawData.data);
    res
      .status(200)
      .json({ workingCapitalRatio, message: "Get /api/working-capital-ratio" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
