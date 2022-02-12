import { Selector } from 'testcafe';

fixture`Select page elements`
    .page`./pages/select-page-elements.html`;

test('Select page element', async t => {
    await t.click('select');

    await t.click('div > .my-class > div:nth-child(2) > select > option[data-opt="2"]');

    const option = Selector('div')
        .child('.my-class')
        .child('div')
        .nth(1)
        .child('select')
        .child('option')
        .withAttribute('data-opt', '1');

    const parent = option.parent();

    await t
        .expect(parent.value).eql('Option 2')
        .click(parent)
        .click(option)
        .expect(parent.value).eql('Option 1');
});
