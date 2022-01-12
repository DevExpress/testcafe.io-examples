import { Selector } from 'testcafe';

fixture`TestController.expect.gte`
    .page`https://devexpress.github.io/testcafe/example/`;

test('Check width of the element', async t => {
    await t.expect(Selector('#developer-name').clientWidth).gte(150);
});

test('Gte should work', async t => {
    await t
        .expect(5).gte(2, '5 is greater or equal than 2')
        .expect(2).gte(2, '2 is greater or equal than 2 ');
});
