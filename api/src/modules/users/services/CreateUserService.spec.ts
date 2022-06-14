import FakeUserRepository from '../repositories/fakes/FakeUserRepository';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import CreateUserService from './CreateUserService';

import AppError from '../../../shared/errors/AppError'

describe('CreateUser', () => {
  let fakeUserRepository: FakeUserRepository;
  let fakeHashProvider: FakeHashProvider;

  let createUser: CreateUserService

  beforeEach(async () => {
    fakeUserRepository = new FakeUserRepository();
    fakeHashProvider = new FakeHashProvider();

    createUser = new CreateUserService(fakeUserRepository, fakeHashProvider);
  })

  it('should be able to throw error if both password arent equal', async () => {
    await expect(
      createUser.execute({
        email: 'john@doe.com',
        name: 'john doe',
        password: '123456',
        passwordConfirmation: '12345'
      })
    ).rejects.toBeInstanceOf(AppError)
  })

  it('should be able to throw error if already have an another account using same email', async () => {
    await fakeUserRepository.create({
      email: 'john@doe.com',
      name: 'john doe',
      password: '123456',
      passwordConfirmation: '123456'
    })

    await expect(
      createUser.execute({
        email: 'john@doe.com',
        name: 'john doe',
        password: '123456',
        passwordConfirmation: '123456'
      })
    ).rejects.toBeInstanceOf(AppError)
  })

  it('should be able to call HashProvider before create account', async () => {
    const hashSpy = jest.spyOn(fakeHashProvider, 'generateHash')

    await createUser.execute({
      email: 'john@doe.com',
      name: 'john doe',
      password: '123456',
      passwordConfirmation: '123456'
    })

    expect(hashSpy).toHaveBeenCalledTimes(1)
  })

  it('should be able to create an account', async () => {
    const { user } = await createUser.execute({
      email: 'john@doe.com',
      name: 'john doe',
      password: '123456',
      passwordConfirmation: '123456'
    })

    expect(user).toHaveProperty('id')
  })
})
