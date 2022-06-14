import { inject, injectable } from "tsyringe";

import Quote from "../infra/typeorm/entities/Quote";
import IQuoteRepository from "../repositories/IQuoteRepository";

export interface IRequest {
  from: string;
  destination: string;
  departDate: string;
  returnDate: string;
  people: number;
  transportation: string;
  name: string;
}

interface IResponse {
  quote: Quote;
}

@injectable()
export default class CreateQuoteService {
  constructor(
    @inject('QuoteRepository') private quotesRepository: IQuoteRepository
  ) {}

  async execute({
    from,
    destination,
    departDate,
    returnDate,
    people,
    transportation,
    name,
  }: IRequest): Promise<IResponse> {
    const quote = await this.quotesRepository.create({
      from,
      destination,
      departDate,
      returnDate,
      people,
      transportation,
      name,
    });

    return {
      quote
    };
  }
}
