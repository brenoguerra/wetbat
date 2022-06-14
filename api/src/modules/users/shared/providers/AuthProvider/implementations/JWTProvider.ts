import ITokenPayloadDTO from '../../../../dtos/ITokenPayloadDTO'
import IPayloadDTO from '../../../../dtos/IPayloadDTO'
import IAuthProvider from '../models/IAuthProvider'

import { sign, verify } from 'jsonwebtoken'

import authConfig from '../../../../../../config/auth'

class JWTProvider implements IAuthProvider {
  public createToken(payload: IPayloadDTO): string {
    const token = sign(payload, authConfig.JWT.secret, {
      subject: payload.id.toString(),
      expiresIn: authConfig.JWT.expiresIn,
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

export default JWTProvider
