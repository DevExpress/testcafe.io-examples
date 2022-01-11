import { Selector } from 'testcafe';

fixture`TestController.dragToElement`
    .page`https://devexpress.github.io/testcafe/example/`;

const designSurfaceItems = Selector('.design-surface').find('.items');

test('Drag an item from the toolbox', async t => {
    await t
        .dragToElement('.toolbox-item.text-input', '.design-surface')
        .expect(designSurfaceItems.count).gt(0);
});
