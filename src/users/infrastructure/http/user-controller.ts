import { Request, Response } from "express";

import { UserByIdFinder } from "../../application/user-by-id-finder";
import { UserNotFound } from "../../domain/user-not-found";

export class UserController {
  constructor(private readonly userByIdFinder: UserByIdFinder) {}

  async run(req: Request, res: Response) {
    try {
      const user = await this.userByIdFinder.run(req.params.id);
      res.status(200).send(user);
    } catch (error) {
      if (error instanceof UserNotFound) {
        res.status(404).send;
      }
      return res.status(500).send();
    }
  }
}
