import { Request, Response } from "express";
import { container } from "tsyringe";

import CreateUserService from "../../../services/CreateUserService";
import AuthenticateUserService from "../../../services/AuthenticateUserService";

export default class UserController {
  public async signUp(request: Request, response: Response): Promise<Response> {
    const createUserService = container.resolve(CreateUserService);
    const { user } = await createUserService.execute(request.body);

    user.password = '';

    return response.json(user)
  }

  public async signIn(request: Request, response: Response): Promise<Response> {
    const authenticateUserService = container.resolve(AuthenticateUserService);
    const { user, token } = await authenticateUserService.execute(request.body);

    user.password = '';

    return response.json({ user, token })
  }
}
