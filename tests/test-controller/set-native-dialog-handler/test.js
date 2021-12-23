import path from 'path';
import PageModel from './page-model';
import { Selector } from 'testcafe';

fixture`TestController.setNativeDialogHandler`
    .page`https://devexpress.github.io/testcafe/example/`;

test('Should populate input', async t => {
    await t
        .setNativeDialogHandler(() => true)
        .click('#populate');
});

fixture`TestController.setNativeDialogHandler`
    .page`about:blank`;

test('Handle a Dialog Invoked on Page Load', async t => {

    await t
        .setNativeDialogHandler(() => true)
        .navigateTo(`file:///${path.join(__dirname, './pages/dialog-on-load.html')}`)
        .click('#btn');
});

fixture`TestController.setNativeDialogHandler`
    .page`./pages/index.html`;

test('Handle Multiple Dialogs', async t => {
    await t
        .setNativeDialogHandler((type, text) => {
            switch (type) {
            case 'confirm':
                switch (text) {
                case 'Do you want to subscribe?':
                    return false;
                case 'Do you want to delete your account?':
                    return true;
                default:
                    throw 'Unexpected confirm dialog!';
                }
            case 'prompt':
                return 'Hi there';
            default:
                throw 'An alert was invoked!';
            }
        })
        .click('#confirm-subscription')
        .click('#show-prompt')
        .click('#confirm-account-deletion');
});

fixture`TestController.setNativeDialogHandler`
    .page`./pages/confirm-delete.html`;

test('Use a Variable in the Dialog Handler', async t => {
    const pageModel = new PageModel();

    await pageModel.delete();
    await t.expect(Selector('.item').exists).notOk();
});
