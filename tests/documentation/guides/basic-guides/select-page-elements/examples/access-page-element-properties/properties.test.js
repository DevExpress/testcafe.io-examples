import { Selector } from 'testcafe';

fixture`Access Page Element Properties`
    .page`https://devexpress.github.io/testcafe/example/`;

test('Check client width', async t => {
    const element     = Selector('#developer-name');
    const clientWidth = await element.clientWidth;

    await t.expect(clientWidth).gt(100);
});
