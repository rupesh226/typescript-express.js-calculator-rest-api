import { Request, Response, NextFunction } from 'express';

export function logger(req: Request, res: Response, next: NextFunction) {
  //console.log(`${req.timestamp} ${req.method} ${req.ip}${req.originalUrl}`);
  console.log(`Request logged: ${req.timestamp}  ${req.method} ${req.path} ${req.ip} ${req.originalUrl}`);
  next();
}