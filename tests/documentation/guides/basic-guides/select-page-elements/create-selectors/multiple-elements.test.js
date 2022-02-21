import { Selector } from 'testcafe';

const sel = Selector('div').child();

fixture`Select page element - create multiple Selectors`
    .page('../pages/multiple-elements.html');

test('Selectors count equals 4', async (t) => {
    await t.expect(sel.count).eql(4);
});

fixture`Select page element - create multiple Selectors`
    .page('../pages/multiple-buttons.html');

test('Click a button', async t => {
    const buttons = Selector('button').withText('A button number');

    await t
        .click(buttons.nth(0))
        .click(buttons.nth(0))
        .click(buttons.nth(0));
});
