import { Selector } from 'testcafe';

fixture`TestController.dragToElement`
    .page`https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/DnDBetweenGrids/jQuery/Light/`;

test('Drag an item', async t => {
    await t
        .switchToIframe('#demoFrame')
        .dragToElement('#grid2 .dx-datagrid-rowsview .dx-command-drag', '#grid1 .dx-datagrid-rowsview')
        .expect(Selector('#grid2 .dx-data-row').count).eql(0);
});
