import { ClientFunction, RequestLogger, RequestMock } from 'testcafe';

const logger = RequestLogger({ url: 'https://devexpress.github.io/testcafe/example/', method: 'GET', isAjax: false });

const mock = RequestMock()
    .onRequestTo({ url: 'http://external-service.com/api/users/', method: 'POST', isAjax: true })
    .respond((req, res) => {
        res.headers['access-control-allow-origin'] = '*';
        res.setBody(JSON.stringify('users'));
    });

fixture`Request filter - with parameters`
    .page`https://devexpress.github.io/testcafe/example/`
    .requestHooks([logger, mock]);

test('The external request shouldn\'t be logged', async t => {
    const countRequests = logger.requests.length;
    const users         = await ClientFunction(() => fetch('http://external-service.com/api/users/', {
        method: 'POST',
    }).then(res => res.json()))();

    await t
        .expect(users).eql('users')
        .expect(logger.requests.length).eql(countRequests);
});
