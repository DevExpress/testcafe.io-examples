import { Selector } from 'testcafe';

const dialog = Selector('#dialog');

fixture`TestController.doubleClick`
    .page`./index.html`;

test('Invoke Image Options Dialog', async t => {
    await t
        .doubleClick('#thumbnail')
        .expect(dialog.visible).ok();
});
