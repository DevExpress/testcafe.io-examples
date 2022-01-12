import { ClientFunction } from 'testcafe';

fixture`TestController.expect.notContains`
    .page`https://devexpress.github.io/testcafe/example/`;

test('Check location', async t => {
    const getLocation = ClientFunction(() => document.location.href.toString());

    await t.expect(getLocation()).notContains('devexpress.com');
});

test('NotContains should work', async t => {
    await t
        .expect('foo bar').notContains('baz', 'string does not contain a substring')
        .expect([1, 2, 3]).notContains(4, 'array does not contain a value')
        .expect({ foo: 'bar', hello: 'universe' }).notContains({ buzz: 'abc' }, 'object does not contain a property');
});
