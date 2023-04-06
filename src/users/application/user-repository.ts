import { User } from "../domain/user";

export interface UserRepository {
  getById(id: string): Promise<User | null>;
}
