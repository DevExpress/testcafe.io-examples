import { Selector } from 'testcafe';

const elementWithId = Selector(id => document.getElementById(id));

fixture`Overwrite Options`
    .page`https://devexpress.github.io/testcafe/example/`;

test('Extend base selector', async t => {
    const visibleElementWithId = elementWithId.with({
        visibilityCheck: true,
    });

    const visibleButton = await visibleElementWithId('submit-button');

    await t.expect(visibleButton.visible).ok();
});
