import express from "express";
import { healthRouter, calculatorRouter } from "./routers";
import { addTimestamp, errorHandler, logger } from "./middlewares";

const app = express();
const port = 3000;

app.use(express.json());
app.use(addTimestamp);
app.use(logger);

app.use("/health", healthRouter);
app.use("/calculator", calculatorRouter);

app.use(errorHandler);

app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});
