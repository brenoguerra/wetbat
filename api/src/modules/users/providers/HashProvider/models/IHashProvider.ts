export default interface IHashProvider {
  generateHash(payload: string): Promise<string>
  compareHash(payload: string, hashToCompare: string): Promise<boolean>
}
