import { Selector } from 'testcafe';

fixture`TestController.expect.lte`
    .page`https://devexpress.github.io/testcafe/example/`;

test('Check height of the element', async t => {
    await t.expect(Selector('#developer-name').offsetHeight).lte(400);
});

test('Lte should work', async t => {
    await t
        .expect(2).lte(5, '2 is less or equal than 5')
        .expect(2).lte(2, '2 is less or equal than 2 ');
});
