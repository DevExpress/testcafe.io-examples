import { Selector } from 'testcafe';

fixture`Use selector`
    .page`https://devexpress.github.io/testcafe/example/`;

const label = Selector('#tried-section').child('label');

test('Click on an element through a DOM node', async t => {
    const labelSnapshot = await label();

    await t.click(labelSnapshot);
});
