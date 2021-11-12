import { ClientFunction, RequestLogger, RequestMock } from 'testcafe';

const logger = RequestLogger(async request => {
    return request.method === 'post' &&
           request.headers['content-type'] === 'text/plain;charset=UTF-8';
});

const mock = RequestMock()
    .onRequestTo(async request => {
        return request.url === 'http://external-service.com/api/users/' &&
               request.method === 'post' &&
               request.isAjax &&
               request.body.toString() === 'foo=bar';
    })
    .respond((req, res) => {
        res.headers['access-control-allow-origin'] = '*';
        res.setBody(JSON.stringify('users'));
    });

fixture`Request filter - with predicate`
    .page`https://devexpress.github.io/testcafe/example/`
    .requestHooks([logger, mock]);

test('Should log mocked request', async t => {
    const users = await ClientFunction(() => fetch('http://external-service.com/api/users/', {
        method: 'POST',
        body:   'foo=bar',
    }).then(res => res.json()))();

    await t
        .expect(users).eql('users')
        .expect(logger.requests.length).eql(1);
});
