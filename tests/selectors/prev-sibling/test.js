import { Selector } from 'testcafe';

fixture`Selector.prevSibling`
    .page`https://devexpress.github.io/testcafe/example/`;

test('Check count of the succeeding sibling elements.', async (t) => {
    // Selects all preceding siblings of all p elements.
    const siblingsP = Selector('p').prevSibling();

    // Selects all closest preceding siblings of all button elements.
    const closestSiblingsButton = Selector('button').prevSibling(0);

    // Selects all furthest preceding siblings of all option elements.
    const furthestSiblingsOption = Selector('option').prevSibling(-1);

    // Selects all p elements that are preceding siblings of a div element.
    const pSiblingsDiv = Selector('div').prevSibling('p');

    await t.expect(siblingsP.count).eql(9);
    await t.expect(closestSiblingsButton.count).eql(1);
    await t.expect(furthestSiblingsOption.count).eql(2);
    await t.expect(pSiblingsDiv.count).eql(1);
});
