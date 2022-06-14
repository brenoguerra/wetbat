import Quote from "../infra/typeorm/entities/Quote";
import { ICreateQuoteDTO } from "../dtos/ICreateQuoteDTO";

export default interface IQuoteRepository {
  create(data: ICreateQuoteDTO): Promise<Quote>;
  list(): Promise<Quote[]>;
}
