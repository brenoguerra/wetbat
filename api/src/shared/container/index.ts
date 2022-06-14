import { container } from "tsyringe";

import '../../modules/users/shared/providers'
import '../../modules/users/providers'

import IUserRepository from "../../modules/users/repositories/IUserRepository";
import UserRepository from "../../modules/users/infra/typeorm/repositories/UserRepository";

import IQuoteRepository from "modules/quotes/repositories/IQuoteRepository";
import QuoteRepository from "modules/quotes/infra/typeorm/repositories/QuoteRepository";

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
container.registerSingleton<IQuoteRepository>('QuoteRepository', QuoteRepository);
