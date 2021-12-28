import { ClientFunction, RequestMock } from 'testcafe';

const mock = RequestMock()
    .onRequestTo('https://api.mycorp.com/users/id/135865')
    .respond({
        name:     'John Hearts',
        position: 'CTO',
    }, 200, { 'access-control-allow-origin': '*' })
    .onRequestTo(/internal.mycorp.com/)
    .respond(null, 404);

fixture`RequestMock`
    .page`https://mycorp.com`
    .requestHooks(mock);

test('Should mock requests', async t => {
    const user = await ClientFunction(() => fetch('https://api.mycorp.com/users/id/135865').then(res => res.json()))();

    await t
        .expect(user).eql({ name: 'John Hearts', position: 'CTO' })
        .navigateTo('https://internal.mycorp.com');
});
