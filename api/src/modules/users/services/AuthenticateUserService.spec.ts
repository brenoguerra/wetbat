import FakeUserRepository from '../repositories/fakes/FakeUserRepository';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import FakeAuthProvider from '../shared/providers/AuthProvider/fakes/FakeAuthProvider';
import AuthenticateUserService from './AuthenticateUserService';

import AppError from '../../../shared/errors/AppError'

describe('AuthenticateUser', () => {
  let fakeUserRepository: FakeUserRepository;
  let fakeHashProvider: FakeHashProvider;
  let fakeAuthProvider: FakeAuthProvider;

  let authenticateUser: AuthenticateUserService

  beforeEach(async () => {
    fakeUserRepository = new FakeUserRepository();
    fakeHashProvider = new FakeHashProvider();
    fakeAuthProvider = new FakeAuthProvider();

    authenticateUser = new AuthenticateUserService(fakeUserRepository, fakeHashProvider, fakeAuthProvider);
  })

  it('should be able to throw error if email not have an account', async () => {
    await expect(
      authenticateUser.execute({
        email: 'john@doe.com',
        password: '123456',
      })
    ).rejects.toBeInstanceOf(AppError)
  })

  it('should be able to throw error if password is incorrect', async () => {
    await fakeUserRepository.create({
      email: 'john@doe.com',
      name: 'john doe',
      password: '123456',
      passwordConfirmation: '123456'
    })

    await expect(
      authenticateUser.execute({
        email: 'john@doe.com',
        password: '12345',
      })
    ).rejects.toBeInstanceOf(AppError)
  })

  it('should be able to call HashProvider to compare passwords', async () => {
    const compareHashSpy = jest.spyOn(fakeHashProvider, 'compareHash')

    await fakeUserRepository.create({
      email: 'john@doe.com',
      name: 'john doe',
      password: '123456',
      passwordConfirmation: '123456'
    })

    await authenticateUser.execute({
      email: 'john@doe.com',
      password: '123456',
    })

    expect(compareHashSpy).toHaveBeenCalledTimes(1)
  })

  it('should be able to call AuthProvider to create token', async () => {
    const createTokenSpy = jest.spyOn(fakeAuthProvider, 'createToken')

    await fakeUserRepository.create({
      email: 'john@doe.com',
      name: 'john doe',
      password: '123456',
      passwordConfirmation: '123456'
    })

    await authenticateUser.execute({
      email: 'john@doe.com',
      password: '123456',
    })

    expect(createTokenSpy).toHaveBeenCalledTimes(1)
  })

  it('should be able to authenticate user', async () => {
    const { id } = await fakeUserRepository.create({
      email: 'john@doe.com',
      name: 'john doe',
      password: '123456',
      passwordConfirmation: '123456'
    })

    const { user, token } = await authenticateUser.execute({
      email: 'john@doe.com',
      password: '123456',
    })

    expect(user.id.toString()).toBe(id.toString());
    expect(token).toBeTruthy();
  })
})
