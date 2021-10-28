import { Selector } from 'testcafe';

fixture`Selector.nth`
    .page`http://devexpress.github.io/testcafe/example/`;

test('Elements exists', async (t) => {
    // Selects the third ul element.
    const secondInput = Selector('input').nth(2);

    await t.expect(secondInput.exists).ok();

    // Selects the last div element.
    const lastDiv = Selector('div').nth(-1);

    await t.expect(lastDiv.exists).ok();
});
