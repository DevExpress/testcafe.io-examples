import { Selector } from 'testcafe';

fixture`Selector.filterVisible`
    .page`http://devexpress.github.io/testcafe/example/`;

test('Check count of the visible divs', async (t) => {
    // Selects all visible div elements.
    const visibleSelectors = Selector('div').filterVisible();

    await t.expect(visibleSelectors.count).eql(17);
});
