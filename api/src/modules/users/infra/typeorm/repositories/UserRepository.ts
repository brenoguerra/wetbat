import User from "../entities/User";

import IUserRepository from "../../../repositories/IUserRepository";
import { ICreateUserDTO } from "../../../dtos/ICreateUserDTO";

import { getRepository, Repository } from 'typeorm';

export default class UserRepository implements IUserRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async create(data: ICreateUserDTO): Promise<User> {
    const user = await this.ormRepository.create(data);
    await this.ormRepository.save(user);

    return user;
  }

  public async delete(id: number): Promise<void> {
    await this.ormRepository.delete({ id })
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({
      where: {
        email
      }
    })

    return user || undefined;
  }

  public async findById(id: number): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({
      where: {
        id
      }
    })

    return user || undefined;
  }

  public async save(user: User): Promise<User> {
    return this.ormRepository.save(user);
  }
}
