import { User } from "../domain/user";
import { UserRepository } from "../domain/user-repository";

export const users: User[] = [
  {
    id: "1",
    email: "ricardo@gmail.com",
  },
  {
    id: "2",
    email: "pedro@gmail.com",
  },
];

export class InMemoryUserRepository implements UserRepository {
  async getById(userId: string): Promise<User | null> {
    const user = users.find((user) => user.id === userId);
    if (!user) {
      return null;
    }

    return new User(user.id, user.email);
  }
}
