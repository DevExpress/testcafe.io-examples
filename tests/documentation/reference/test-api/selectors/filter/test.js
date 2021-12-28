import { Selector } from 'testcafe';

fixture`Selector.filter`
    .page`http://devexpress.github.io/testcafe/example/`;

test('Check count of the checked boxes', async (t) => {
    // eslint-disable-next-line no-unused-vars
    Selector('div').filter((node, idx) => {
        // node === a <div> node
        // idx === index of the current <div> node
    });

    await t
        .click('#remote-testing')
        .click('#traffic-markup-analysis');

    const isNodeOk = (node, idx) => {
        const unnecessaryCheckboxIndex = 5;

        return node.checked && unnecessaryCheckboxIndex !== idx;
    };

    const checkedBoxes = Selector('input[type="checkbox"]').filter((node, idx) => {
        return isNodeOk(node, idx);
    }, { isNodeOk });

    await t.expect(checkedBoxes.count).eql(2);
});

test('Check count of the columns', async (t) => {
    // Selects div elements that
    // have the column class.
    const columns = Selector('div').filter('.column');

    await t.expect(columns.count).eql(2);
});
