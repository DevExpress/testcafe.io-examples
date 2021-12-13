import { Selector } from 'testcafe';

fixture`Parameter as Selector`
    .page`https://devexpress.github.io/testcafe/example/`;

const lastCheckbox = Selector('fieldset p:last-child [type="checkbox"]');

test('Click last checkbox', async t => {

    // Click will be performed on the element selected by
    // the 'getLastItem' selector.
    await t.click(lastCheckbox);
});
