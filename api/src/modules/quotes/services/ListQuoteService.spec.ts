import FakeQuoteRepository from "../repositories/fakes/FakeQuoteRepository";
import ListQuoteService from "./ListQuoteService";

describe('ListQuote', () => {
  let fakeQuoteRepository: FakeQuoteRepository;
  let listQuote: ListQuoteService;

  beforeEach(async () => {
    fakeQuoteRepository = new FakeQuoteRepository();
    listQuote = new ListQuoteService(fakeQuoteRepository);
  })

  it('should be able to list quotes', async () => {
    Array(5).fill(0).map(async () => {
      await fakeQuoteRepository.create({
        from: 'valid_from',
        destination: 'valid_bulgary',
        departDate: '01/01/2023',
        returnDate: '03/01/2023',
        people: 2,
        transportation: 'valid_transportation',
        name: 'valid_name',
      })
    })

    const { quotes } = await listQuote.execute({});

    expect(quotes).toHaveLength(5)
  })
})
