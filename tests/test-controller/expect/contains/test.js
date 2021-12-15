import { ClientFunction } from 'testcafe';

fixture`TestController.expect.contains`
    .page`https://devexpress.github.io/testcafe/example/`;

test('Check location', async t => {
    const getLocation = ClientFunction(() => document.location.href.toString());

    await t.expect(getLocation()).contains('devexpress.github.io');
});

test('Contains should work', async t => {
    await t
        .expect('foo bar').contains('bar', 'string contains the expected substring')
        .expect([1, 2, 3]).contains(2, 'array contains the expected value')
        .expect({ foo: 'bar', hello: 'universe' }).contains({ foo: 'bar' }, 'object contains the expected property');
});
