import { Request, Response } from "express";

import { WelcomeEmailSender } from "../application/welcome-email-sender";
import { UserNotFound } from "../domain/user-not-found";

export class UserController {
  constructor(private readonly welcomeEmailSender: WelcomeEmailSender) {}

  async run(req: Request, res: Response) {
    try {
      const userId = req.params.id;
      await this.welcomeEmailSender.run(userId);
      res.status(200).send();
    } catch (error: any) {
      if (error instanceof UserNotFound) {
        res.status(200).send({
          code: error.code,
          message: error.message,
          messageEs: error.messageEs,
        });
      } else {
        res.status(200).send("Server error");
      }
    }
  }
}
