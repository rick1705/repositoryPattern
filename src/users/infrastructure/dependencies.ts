import { UserByIdFinder } from "../application/user-by-id-finder";
import { UserController } from "./http/user-controller";
import { ElasticUserRepository } from "./user-repository/elastic-user-repository";

const elasticUserRepository = new ElasticUserRepository();

const userByIdFinder = new UserByIdFinder(elasticUserRepository);

export const userController = new UserController(userByIdFinder);
