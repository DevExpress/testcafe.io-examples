import { Selector } from 'testcafe';

fixture`Selector.filterHidden`
    .page`http://devexpress.github.io/testcafe/example/`;

test('Check count of the hidden divs', async (t) => {
    // Selects all hidden label elements.
    const hiddenSelectors = Selector('div').filterHidden();

    await t.expect(hiddenSelectors.count).eql(2);
});
