import { Selector } from 'testcafe';

fixture`TestController.expect.lt`
    .page`https://devexpress.github.io/testcafe/example/`;

test('Check height of the element', async t => {
    await t.expect(Selector('#developer-name').offsetHeight).lt(25);
});

test('Lt should work', async t => {
    await t.expect(2).lt(5, '2 is less than 5');
});
