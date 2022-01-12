import { ClientFunction } from 'testcafe';

fixture`TestController.expect.match`
    .page`https://devexpress.github.io/testcafe/example/`;

test('Location should match', async t => {
    const getLocation = ClientFunction(() => document.location.href.toString());

    await t.expect(getLocation()).match(/\.io/);
});

test('Match should work', async t => {
    await t.expect('foobar').match(/^f/, 'this assertion will be passed');
});
