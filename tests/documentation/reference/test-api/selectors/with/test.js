import { Selector } from 'testcafe';

const elementWithId = Selector(id => document.getElementById(id));

fixture`Selector.with`
    .page`http://devexpress.github.io/testcafe/example/`;

test('Visible button exists', async t => {
    const visibleElementWithId = elementWithId.with({
        visibilityCheck: true,
    });
    const visibleButton        = await visibleElementWithId('submit-button');

    await t.expect(visibleButton).ok();
});
