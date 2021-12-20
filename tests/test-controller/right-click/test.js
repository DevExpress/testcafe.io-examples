import { Selector } from 'testcafe';

fixture`TestController.rightClick`
    .page`https://devexpress.github.io/testcafe/example/`;

test('Popup Menu', async t => {
    await t
        .rightClick('#developer-name')
        .expect(Selector('#cell-popup-menu').exists).notOk();
});
