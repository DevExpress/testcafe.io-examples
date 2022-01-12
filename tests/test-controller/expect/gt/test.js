import { Selector } from 'testcafe';

fixture`TestController.expect.gt`
    .page`https://devexpress.github.io/testcafe/example/`;

test('Check width of the element', async t => {
    await t.expect(Selector('#developer-name').clientWidth).gt(100);
});

test('Gt should work', async t => {
    await t.expect(5).gt(2, '5 is greater than 2');
});
