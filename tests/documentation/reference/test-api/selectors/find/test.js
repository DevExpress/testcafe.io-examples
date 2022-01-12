import { Selector } from 'testcafe';

fixture`Selector.find`
    .page`http://devexpress.github.io/testcafe/example/`;

test('Check count of the checked boxes', async (t) => {
    // Selects input elements that are descendants
    // of div elements with the col-1 class.
    const foundSelector = Selector('div.col-1').find('input');

    await t.expect(foundSelector.count).eql(7);
});
