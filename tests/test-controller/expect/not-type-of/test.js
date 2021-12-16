import { Selector } from 'testcafe';

fixture`TestController.expect.notTypeOf`
    .page`https://devexpress.github.io/testcafe/example/`;

test('Type of the element\'s attribute shouldn\'t be null', async t => {
    await t.expect(Selector('#developer-name').getAttribute('data-testid')).notTypeOf('null');
});

test('NotTypeOf should work', async t => {
    await t.expect('bar').notTypeOf('number', 'string is not a number');
});
