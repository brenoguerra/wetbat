import { Request, Response } from "express";
import { container } from "tsyringe";

import CreateQuoteService from "modules/quotes/services/CreateQuoteService";
import ListQuoteService from "modules/quotes/services/ListQuoteService";

export default class QuoteController {
  public async create(request: Request, response: Response): Promise<Response> {
    const createQuoteService = container.resolve(CreateQuoteService);
    const { quote } = await createQuoteService.execute(request.body);

    return response.json(quote);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const listQuoteService = await container.resolve(ListQuoteService);
    const { quotes } = await listQuoteService.execute({});

    return response.json(quotes)
  }
}
