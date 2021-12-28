import { Selector } from 'testcafe';

fixture`Selector.addCustomMethods`
    .page`https://js.devexpress.com/`;

test('Check table', async t => {
    const myTable = Selector('.dx-datagrid-table')
        .nth(1)
        .addCustomMethods({
            getExpandButtonCell: (table, rowIndex) => {
                return table[0].querySelectorAll('.dx-group-row')[rowIndex].cells[0];
            },
            // ...
            // Other methods that return DOM nodes.
        }, {
            returnDOMNodes: true,
        })
        .addCustomMethods({
            getCellText: (table, rowIndex, columnIndex) => {
                return table.rows[rowIndex].cells[columnIndex].innerText;
            },
            // ...
            // Other methods that return serializable objects.
        });

    await t
        .expect(myTable.getCellText(3, 1)).contains('Europe')
        .click(myTable.getExpandButtonCell(0))
        .expect(myTable.getCellText(1, 1)).contains('North America');
});
