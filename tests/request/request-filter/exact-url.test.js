import { RequestLogger, RequestMock } from 'testcafe';

const logger = RequestLogger(['https://devexpress.github.io/testcafe/example/', 'http://localhost:8080']);

const mock = RequestMock()
    .onRequestTo('http://external-service.com/api/')
    .respond('Mocked respond');

fixture`Request filter - exact url`
    .page`https://devexpress.github.io/testcafe/example/`
    .requestHooks([logger, mock]);

test('The external request shouldn\'t be logged', async t => {
    const countRequests = logger.requests.length;

    await t.navigateTo('http://external-service.com/api/')
        .expect(logger.requests.length).eql(countRequests);
});
