import { Selector } from 'testcafe';

// This selector is created from a CSS selector
// that matches all elements of a specified class.
const populateButton = Selector('#populate');

// This selector is created based on the previous selector and inherits
// its initializer, but overwrites the `visibilityCheck` parameter.
Selector(populateButton, { visibilityCheck: true });

fixture `Initialize selector with other selector`
    .page `https://devexpress.github.io/testcafe/example/`;

test('Visible button with id "#populate" exists', async (t) => {
    await t.expect(populateButton.exists).ok();
});
