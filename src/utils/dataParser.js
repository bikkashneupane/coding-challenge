import fs from "fs/promises";

export const dataParser = async (filePath) => {
  const rawData = await fs.readFile(filePath, "utf-8");
  return JSON.parse(rawData);
};
