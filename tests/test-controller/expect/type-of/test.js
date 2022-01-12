import { Selector } from 'testcafe';

fixture`TestController.expect.typeOf`
    .page`https://devexpress.github.io/testcafe/example/`;

test('Type of the element\'s attribute should be string', async t => {
    await t.expect(Selector('#developer-name').getAttribute('data-testid')).typeOf('string');
});

test('TypeOf should work', async t => {
    await t
        .expect({ a: 'bar' }).typeOf('object', 'it\'s an object')
        .expect(/bar/).typeOf('regexp', 'it\'s a regular expression')
        .expect(null).typeOf('null', 'it\'s a null');
});
