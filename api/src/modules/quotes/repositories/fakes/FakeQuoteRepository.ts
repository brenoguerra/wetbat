import Quote from "../../infra/typeorm/entities/Quote";

import IQuoteRepository from "../IQuoteRepository";
import { ICreateQuoteDTO } from "../../dtos/ICreateQuoteDTO";

export default class FakeQuoteRepository implements IQuoteRepository {
  private quotes: Quote[] = [];

  public async create(data: ICreateQuoteDTO): Promise<Quote> {
    const quote = new Quote();

    Object.assign(quote, {
      id: this.quotes.length + 1,
      from: data.from,
      destination: data.destination,
      depart_date: data.departDate,
      return_date: data.returnDate,
      people: data.people,
      transportation: data.transportation,
      name: data.name,
    });

    this.quotes.push(quote);

    return quote;
  }

  public async list(): Promise<Quote[]> {
    return this.quotes;
  }
}
