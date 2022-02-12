import { Selector } from 'testcafe';

fixture`Use selector`
    .page`https://devexpress.github.io/testcafe/example/`;

const label = Selector('#tried-section').child('label');

test('Click on an element through the Selector', async t => {
    await t.click(label);
});
