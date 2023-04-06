import { User } from "./domain/user";
import { USER_COLLECTION } from "./user-collection";
import { UserRepository } from "./user-repository";

export class MongoUserRepository implements UserRepository {
  async getById(id: string): Promise<User | null> {
    console.log("Using mongo");
    const user = USER_COLLECTION.find((user) => user.id === id);
    return user ? new User(user.id, user.name) : null;
  }
}
