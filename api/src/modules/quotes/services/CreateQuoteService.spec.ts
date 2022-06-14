import FakeQuoteRepository from "../repositories/fakes/FakeQuoteRepository";
import CreateQuoteService from "./CreateQuoteService";

describe('CreateQuote', () => {
  let fakeQuoteRepository: FakeQuoteRepository;
  let createQuote: CreateQuoteService;

  beforeEach(async () => {
    fakeQuoteRepository = new FakeQuoteRepository();
    createQuote = new CreateQuoteService(fakeQuoteRepository);
  })

  it('should be able to create a new quote', async () => {
    const { quote } = await createQuote.execute({
      from: 'valid_from',
      destination: 'valid_bulgary',
      departDate: '01/01/2023',
      returnDate: '03/01/2023',
      people: 2,
      transportation: 'valid_transportation',
      name: 'valid_name'
    });

    expect(quote).toHaveProperty('id')
  })
})
