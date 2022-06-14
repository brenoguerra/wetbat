import User from "../infra/typeorm/entities/User";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";

export default interface IUserRepository {
  create(data: Omit<ICreateUserDTO, 'passwordConfirmation'>): Promise<User>;
  delete(id: number): Promise<void>;
  findById(id: number): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
  save(user: User): Promise<User>;
}
