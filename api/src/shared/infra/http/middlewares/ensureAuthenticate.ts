import { container } from 'tsyringe'
import { Request, Response, NextFunction } from 'express'

import AppError from '../../../errors/AppError'
import IAuthProvider from '../../../../modules/users/shared/providers/AuthProvider/models/IAuthProvider'

export default async function ensureAuthenticate(
  request: Request,
  response: Response,
  next: NextFunction,
): Promise<void> {
  const header = request.headers.authorization
  if (!header) throw new AppError('Token inválido', 403)

  const [, token] = header.split(' ')

  try {
    const authProvider = container.resolve<IAuthProvider>('AuthProvider')
    const { sub } = authProvider.verifyToken(token)

    request.user = {
      id: sub,
    }

    return next()
  } catch (error) {
    throw new AppError('Token inválido', 403)
  }
}
