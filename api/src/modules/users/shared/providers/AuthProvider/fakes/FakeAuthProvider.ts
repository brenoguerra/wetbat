import ITokenPayloadDTO from '../../../../dtos/ITokenPayloadDTO'
import IPayloadDTO from '../../../../dtos/IPayloadDTO'
import IAuthProvider from '../models/IAuthProvider'

import { sign, verify } from 'jsonwebtoken'

import authConfig from '../../../../../../config/auth'

class FakeAuthProvider implements IAuthProvider {
  public createToken(payload: IPayloadDTO): string {
    const token = sign(payload, 'valid_secret', {
      subject: payload.id.toString(),
      expiresIn: '2h',
    })

    return token
  }

  public verifyToken(token: string): ITokenPayloadDTO {
    const decodedToken = verify(
      token,
      authConfig.JWT.secret,
    ) as ITokenPayloadDTO

    return {
      exp: decodedToken.exp,
      iat: decodedToken.iat,
      sub: decodedToken.sub,
    }
  }
}

export default FakeAuthProvider
