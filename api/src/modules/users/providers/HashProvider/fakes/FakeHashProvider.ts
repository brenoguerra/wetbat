import IHashProvider from '../models/IHashProvider'

class FakeHashProvider implements IHashProvider {
  public async generateHash(payload: string): Promise<string> {
    return payload
  }

  public async compareHash(
    payload: string,
    hashToCompare: string,
  ): Promise<boolean> {
    return payload === hashToCompare
  }
}

export default FakeHashProvider
