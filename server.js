import express from "express";
import financeRouter from "./src/routes/financeRoute.js";
import cors from "cors";
import morgan from "morgan";

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/finance", financeRouter);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server is live" });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, (error) =>
  error ? console.log(error) : console.log(`Server running in port ${PORT}`)
);
