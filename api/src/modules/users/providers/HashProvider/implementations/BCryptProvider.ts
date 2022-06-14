import IHashProvider from '../models/IHashProvider'

import { hash, compare } from 'bcryptjs'

class BCryptProvider implements IHashProvider {
  public async generateHash(payload: string): Promise<string> {
    return hash(payload, 11)
  }

  public async compareHash(
    payload: string,
    hashToCompare: string,
  ): Promise<boolean> {
    return compare(payload, hashToCompare)
  }
}

export default BCryptProvider
