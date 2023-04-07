import { EmailSender } from "../domain/email-sender";
import { User } from "../domain/user";
import { UserNotFound } from "../domain/user-not-found";
import { UserRepository } from "../domain/user-repository";
export class WelcomeEmailSender {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly emailSender: EmailSender
  ) {}

  async run(userId: string): Promise<User | null> {
    const user = await this.userRepository.getById(userId);
    if (!user) {
      throw new UserNotFound(
        "10001",
        `User id not found ${userId}`,
        `Usuario con id ${userId} no existe`
      );
    }

    await this.emailSender.send(user.email, "Welcome to application !");

    return user;
  }
}
