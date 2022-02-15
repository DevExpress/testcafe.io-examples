import { Selector } from 'testcafe';

fixture `Select Elements With Dynamic IDs`
    .page `../../pages/dynamic-ids.html`;

test('Elements are exists', async t => {
    const container = Selector('div').withAttribute('class', 'container');
    const item1     = Selector('div').withText('Item 1');
    const item2     = container.child(1);

    await t.expect(item1.exists).ok();
    await t.expect(item2.exists).ok();
});
