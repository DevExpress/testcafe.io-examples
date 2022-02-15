import { Selector } from 'testcafe';

fixture `Select Elements With Partially Dynamic IDs`
    .page `../../pages/partially-dynamic-ids.html`;

test('Elements are exists', async t => {
    const wrapper   = Selector('div').withAttribute('id', /\w+-wrapper-\w+/);
    const container = Selector('[id$="container"]');
    const item      = Selector('[id|="item"]');

    await t.expect(wrapper.exists).ok();
    await t.expect(container.exists).ok();
    await t.expect(item.exists).ok();
});
