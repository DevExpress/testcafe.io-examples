import { Selector } from 'testcafe';

fixture`Enumerate Elements Identified by a Selector`
    .page`https://devexpress.github.io/testcafe/example/`;

test('Click on the checkbox', async t => {
    const checkboxes    = Selector('legend').withText('Which features are important to you:').parent(0).find('input');
    const checkboxCount = await checkboxes.count;

    for (let i = 0; i < checkboxCount; i++)
        await t.click(checkboxes.nth(i));
});
