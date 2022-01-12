import { RequestLogger, RequestMock } from 'testcafe';

const logger = RequestLogger(/example/);

const mock = RequestMock()
    .onRequestTo(/\/api\/users\//)
    .respond('Mocked respond');

fixture`Request filter - with Regular Expression`
    .page`https://devexpress.github.io/testcafe/example/`
    .requestHooks([logger, mock]);

test('The external request shouldn\'t be logged', async t => {
    const countRequests = logger.requests.length;

    await t.navigateTo('http://external-service.com/api/users/')
        .expect(logger.requests.length).eql(countRequests);
});
