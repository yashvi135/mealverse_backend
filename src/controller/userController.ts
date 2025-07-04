import { Request, Response } from 'express';

export const getUsers = (req: Request, res: Response) => {
  console.log("yashvi user");
  res.json([
    { id: 1, name: "Yashvi" },
    { id: 2, name: "Ken" }
  ]);
};
