import { inject, injectable } from "tsyringe";

import User from "../infra/typeorm/entities/User";
import IUserRepository from "../repositories/IUserRepository";
import IHashProvider from "../providers/HashProvider/models/IHashProvider";

import AppError from "../../../shared/errors/AppError";

export interface IRequest {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

interface IResponse {
  user: User;
}

@injectable()
export default class CreateUserService {
  constructor(
    @inject('UserRepository') private usersRepository: IUserRepository,

    @inject('HashProvider') private hashProvider: IHashProvider,
  ) {}

  async execute({
    name,
    email,
    password,
    passwordConfirmation
  }: IRequest): Promise<IResponse> {
    if (password !== passwordConfirmation) throw new AppError('Both passwords must be equal')

    const emailAlreadyExists = await this.usersRepository.findByEmail(email)
    if (emailAlreadyExists) throw new AppError('Already exists an account using this e-mail');

    const hashedPassword = await this.hashProvider.generateHash(password)

    const user = await this.usersRepository.create({
      email: email.toLowerCase(),
      name,
      password: hashedPassword,
    })

    return {
      user,
    }
  }
}
