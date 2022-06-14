import { inject, injectable } from "tsyringe";

import Quote from "../infra/typeorm/entities/Quote";
import IQuoteRepository from "../repositories/IQuoteRepository";

interface IResponse {
  quotes: Quote[];
}

@injectable()
export default class ListQuoteService {
  constructor(
    @inject('QuoteRepository') private quotesRepository: IQuoteRepository
  ) {}

  async execute({}): Promise<IResponse> {
    const quotes = await this.quotesRepository.list();

    return {
      quotes
    };
  }
}
