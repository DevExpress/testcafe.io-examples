import { Selector } from 'testcafe';

fixture`Filter dom by predicates`
    .page`https://devexpress.github.io/testcafe/example/`;

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
