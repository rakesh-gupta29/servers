import { Request, Response, NextFunction } from "express";

export interface IRequest extends Request {
  flash(message: string, callback: any): any;
  logIn(user: any, callback: any): any;
  user(): any;
  logout(): void;
}
export interface INext extends NextFunction {}

export interface IResponse extends Response {}
