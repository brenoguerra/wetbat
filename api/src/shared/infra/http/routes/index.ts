import { Router } from "express";

import usersRouter from "../../../../modules/users/infra/http/routes/users.routes";
import quotesRouter from "../../../../modules/quotes/infra/http/routes/quotes.routes";

const routes = Router()

routes.use('/users', usersRouter);
routes.use('/quotes', quotesRouter);

export default routes
