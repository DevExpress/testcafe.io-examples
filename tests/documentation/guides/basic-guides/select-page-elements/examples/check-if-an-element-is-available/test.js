import { Selector } from 'testcafe';

fixture`Check if an Element is Available`
    .page`https://devexpress.github.io/testcafe/example/`;

test('Type text', async t => {
    const element = Selector('#developer-name');

    if (await element.exists && await element.visible)
        await t.typeText(element, 'Peter Parker');

    // ...
});
