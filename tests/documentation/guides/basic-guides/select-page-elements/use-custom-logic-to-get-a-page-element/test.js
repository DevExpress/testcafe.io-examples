import { Selector } from 'testcafe';

fixture`Select page elements`
    .page`https://devexpress.github.io/testcafe/example/`;

test('Use Custom Logic to Get a Page Element', async t => {
    const checkBoxesStartingWithR = Selector(() => {
        let labels = document.querySelectorAll('label');

        labels = Array.prototype.slice.call(labels);

        const targetLabels = labels.filter(label => label.textContent.match(/^R/));

        return targetLabels.map(label => label.children[0]);
    });

    await t.click(checkBoxesStartingWithR.nth(0));
});
