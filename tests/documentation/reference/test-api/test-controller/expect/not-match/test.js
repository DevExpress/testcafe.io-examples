import { ClientFunction } from 'testcafe';

fixture`TestController.expect.notMatch`
    .page`https://devexpress.github.io/testcafe/example/`;

test('Location shouldn\'t match', async t => {
    const getLocation = ClientFunction(() => document.location.href.toString());

    await t.expect(getLocation()).notMatch(/\.co\.uk/);
});

test('NotMatch should work', async t => {
    await t.expect('foobar').notMatch(/^b/, 'this assertion will be passed');
});
