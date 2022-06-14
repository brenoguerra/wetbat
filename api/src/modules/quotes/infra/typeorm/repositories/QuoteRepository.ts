import Quote from "../entities/Quote";

import IQuoteRepository from "modules/quotes/repositories/IQuoteRepository";
import { ICreateQuoteDTO } from "modules/quotes/dtos/ICreateQuoteDTO";

import { getRepository, Repository } from "typeorm";

export default class QuoteRepository implements IQuoteRepository {
  private ormRepository: Repository<Quote>;

  constructor() {
    this.ormRepository = getRepository(Quote);
  }

  public async create(data: ICreateQuoteDTO): Promise<Quote> {
    const quote = await this.ormRepository.create(data);
    await this.ormRepository.save(quote);

    return quote;
  }

  public async list(): Promise<Quote[]> {
    const quotes = await this.ormRepository.find({});
    return quotes;
  }
}
