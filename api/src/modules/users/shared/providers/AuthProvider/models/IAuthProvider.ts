import IPayloadDTO from '../../../../dtos/IPayloadDTO'
import ITokenPayloadDTO from '../../../../dtos/ITokenPayloadDTO'

export default interface IAuthProvider {
  createToken(data: IPayloadDTO): string
  verifyToken(token: string): ITokenPayloadDTO
}
