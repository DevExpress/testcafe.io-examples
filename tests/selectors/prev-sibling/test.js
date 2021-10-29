import { Selector } from 'testcafe';

fixture`Selector.prevSibling`
    .page`https://devexpress.github.io/testcafe/example/`;

test('Check count of the succeeding sibling elements.', async (t) => {
    // Selects all preceding siblings of all p elements.
    const siblingsP = Selector('p').prevSibling();

    await t.expect(siblingsP.count).eql(9);

    // Selects all closest preceding siblings of all button elements.
    const closestSiblingsButton = Selector('button').prevSibling(0);

    await t.expect(closestSiblingsButton.count).eql(1);

    // Selects all furthest preceding siblings of all option elements.
    const furthestSiblingsOption = Selector('option').prevSibling(-1);

    await t.expect(furthestSiblingsOption.count).eql(2);

    // Selects all p elements that are preceding siblings of a div element.
    const pSiblingsDiv = Selector('div').prevSibling('p');

    await t.expect(pSiblingsDiv.count).eql(1);
});

test('Check count of the filtered elements', async (t) => {
    // eslint-disable-next-line no-unused-vars
    Selector('section').prevSibling((node, idx, originNode) => {
        // node === the <section>'s preceding sibling node
        // idx === index of the current <section>'s preceding sibling node
        // originNode === the <section> element
    });

    const isNodeOk = (node, idx, originNode) => {
        console.log({ node, idx, originNode });
        return idx === 6;
    };

    const filteredDiv = Selector('div').prevSibling((node) => {
        return !isNaN(node.textContent);
    }, { isNodeOk });

    await t.expect(filteredDiv.count).eql(10);
});
