import User from "../../infra/typeorm/entities/User";

import IUserRepository from "../IUserRepository";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";

export default class FakeUserRepository implements IUserRepository {
  private users: User[] = [];

  public async create(data: ICreateUserDTO): Promise<User> {
    const user = new User();

    Object.assign(user, {
      id: this.users.length + 1,
      name: data.name,
      email: data.email,
      password: data.password,
    });

    this.users.push(user);

    return user;
  }

  public async delete(id: number): Promise<void> {
    this.users.filter(user => user.id !== id);
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    return this.users.find(user => user.email === email);
  }

  public async findById(id: number): Promise<User | undefined> {
    return this.users.find(user => user.id === id);
  }

  public async save(user: User): Promise<User> {
    const findIndex = this.users.findIndex(u => u.id === user.id);
    this.users[findIndex] = user;

    return user;
  }
}
