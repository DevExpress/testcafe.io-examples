import { RequestMock, Selector } from 'testcafe';

const mock = RequestMock()
    .onRequestTo('https://external-service.com/api/')
    .respond('External service was requested.')
    .onRequestTo(/\/users\//)
    .respond('Users were requested.');

fixture`RequestMock.onRequestTo`
    .page`https://external-service.com/api/`
    .requestHooks(mock);

test('Should mock requests', async t => {
    await t
        .expect(Selector('body').innerText).eql('External service was requested.')
        .navigateTo('https://external-service.com/api/users/')
        .expect(Selector('body').innerText).eql('Users were requested.');
});
