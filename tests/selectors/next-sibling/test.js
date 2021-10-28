import { Selector } from 'testcafe';

fixture`Selector.nextSibling`
    .page`https://devexpress.github.io/testcafe/example/`;

test('Check count of the succeeding sibling elements.', async (t) => {
    // Selects all succeeding siblings of all 'header' elements.
    const siblingsHeader = Selector('header').nextSibling();

    await t.expect(siblingsHeader.count).eql(3);

    // Selects all closest succeeding siblings of all div elements.
    const closestSiblingsDiv = Selector('div').nextSibling(0);

    await t.expect(closestSiblingsDiv.count).eql(13);

    // Selects all furthest succeeding siblings of all fieldset elements.
    const furthestSiblingsFieldset = Selector('fieldset').nextSibling(-1);

    await t.expect(furthestSiblingsFieldset.count).eql(3);

    // Selects all p elements that are succeeding siblings of an legend element.
    const pSiblingsDiv = Selector('legend').nextSibling('p');

    await t.expect(pSiblingsDiv.count).eql(8);
});
