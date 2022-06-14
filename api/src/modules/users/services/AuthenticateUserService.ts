import { inject, injectable } from "tsyringe";

import User from "../infra/typeorm/entities/User";
import IUserRepository from "../repositories/IUserRepository";
import IHashProvider from "../providers/HashProvider/models/IHashProvider";
import IAuthProvider from "../shared/providers/AuthProvider/models/IAuthProvider";

import AppError from "../../../shared/errors/AppError";

export interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: User;
  token: string;
}

@injectable()
export default class AuthenticateUserService {
  constructor(
    @inject('UserRepository') private usersRepository: IUserRepository,

    @inject('HashProvider') private hashProvider: IHashProvider,

    @inject('AuthProvider') private authProvider: IAuthProvider,
  ) {}

  async execute({
    email,
    password,
  }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email)
    if (!user) throw new AppError('Invalid credentials')

    const comparePasswords = await this.hashProvider.compareHash(password, user.password)
    if (!comparePasswords) throw new AppError('Invalid credentials')

    const token = this.authProvider.createToken({
      id: user.id.toString()
    })

    user.password = '';

    return {
      user,
      token
    }
  }
}
