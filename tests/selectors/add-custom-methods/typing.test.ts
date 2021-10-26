import { Selector } from 'testcafe';

interface CustomSelector extends Selector {
    getCellText(rowIndex: number, columnIndex: number): Promise<any>;
    getExpandButtonCell(rowIndex: number): SelectorPromise;
}

fixture `Selector.addCustomMethods with TS`
    .page `https://js.devexpress.com/`;

test('Check table', async t => {
    const myTable = <CustomSelector>Selector('.dx-datagrid-table')
        .nth(1)
        .addCustomMethods({
            getExpandButtonCell: (table: HTMLTableElement, rowIndex: number) => {
                return table[0].querySelectorAll('.dx-group-row')[rowIndex].cells[0];
            }
            // ...
            // Other methods that return DOM nodes.
        }, {
            returnDOMNodes: true
        })
        .addCustomMethods({
            getCellText: (table: HTMLTableElement, rowIndex: number, columnIndex: number) => {
                return table.rows[rowIndex].cells[columnIndex].innerText;
            }
            // ...
            // Other methods that return serializable objects.
        });

    await t
        .expect(myTable.getCellText(3, 1)).contains('Europe')
        .click(myTable.getExpandButtonCell(0))
        .expect(myTable.getCellText(1, 1)).contains('North America');
});
