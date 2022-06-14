import { Router } from "express";

import ensureAuthenticate from "../../../../../shared/infra/http/middlewares/ensureAuthenticate";
import { validationFields } from "../../../../../shared/infra/http/middlewares/validationFields";
import { ICreateQuoteDTO } from "modules/quotes/dtos/ICreateQuoteDTO";

import QuoteController from "../controllers/QuoteController";

const quotesRouter = Router();
const quoteController = new QuoteController();

quotesRouter.use(ensureAuthenticate)
quotesRouter.get('/', quoteController.index)
quotesRouter.post('/', validationFields(ICreateQuoteDTO), quoteController.create)

export default quotesRouter
