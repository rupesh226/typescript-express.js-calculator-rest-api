import { Request, Router } from "express";
import { logger } from "../middlewares/log";
import { CalculatorRequestBody } from "../types";
import { validateCalculatorRequest } from "../middlewares";

export const router = Router();

router.use(logger);

// router.get('/', logger, (req :Request, res) => {
//     res.send(({
//         message: 'OK',
//         timestamp: req.timestamp,
//         data: [
//             { id:1, result:1},
//             { id:2, result:2}

//         ],

//  }))
//  });

// router.get('/:id', (req : Request, res) => {
//     // console.log("req.params.id:"+JSON.stringify(req.params.id));
//     // console.log("req.query:"+JSON.stringify(req.query));
//     // console.log("req.body:"+JSON.stringify(req.body));
//     // console.log("req.headers:"+JSON.stringify(req.headers));
//     // console.log("req.cookies:"+JSON.stringify(req.cookies));
//     // console.log("req.ip:"+JSON.stringify(req.ip));

//     res.send({
//         message : 'Get calculator ID',
//         timestamp: req.timestamp,
//         id: req.params.id,
//         result: 1
//     });
// });

router.get("/", (req: Request, res) => {
  res.send({
    message: "Get all calculations",
    timestamp: req.timestamp,
    data: [
      { id: 1, result: 1 },
      { id: 2, result: 2 },
    ],
  });
});

router.get("/:id", (req: Request, res) => {
  res.send({
    message: "Get calculation by ID",
    timestamp: req.timestamp,
    id: req.params.id,
    result: 1,
  });
});

router.delete("/:id", (req: Request, res) => {
  res.status(204).end();
});

router.put(
  "/:id",
  validateCalculatorRequest,
  (req: Request<{ id: string }, any, CalculatorRequestBody>, res) => {
    const { operator, operand1, operand2 } = req.body;
    let result: number | string;
    switch (operator) {
      case "+":
        result = operand1 + operand2;
        break;
      case "-":
        result = operand1 - operand2;
        break;
      case "*":
        result = operand1 * operand2;
        break;
      case "/":
        result = operand1 / operand2;
        break;
      default:
        result = "Invalid operator";
        break;
    }
    res.send({
      message: "Update a calculation",
      id: req.params.id,
      timestamp: req.timestamp,
      result,
    });
  }
);

router.post(
  "/",
  validateCalculatorRequest,
  (req: Request<{}, any, CalculatorRequestBody>, res) => {
    const { operator, operand1, operand2 } = req.body;
    let result: number | string;
    switch (operator) {
      case "+":
        result = operand1 + operand2;
        break;
      case "-":
        result = operand1 - operand2;
        break;
      case "*":
        result = operand1 * operand2;
        break;
      case "/":
        result = operand1 / operand2;
        break;
      default:
        result = "Invalid operator";
        break;
    }
    res.status(201).send({
      message: "Create new calculation",
      timestamp: req.timestamp,
      result,
    });
  }
);
