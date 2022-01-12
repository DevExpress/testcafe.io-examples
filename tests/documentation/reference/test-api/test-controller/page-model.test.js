import PageModel from './page-model';
import PageModelImportT from './page-model-import-t';

fixture`TestController page model`
    .page('https://github.com/login');

test('Login', async (t) => {
    await PageModel.login(t);
});

fixture`TestController page model with the imported controller`
    .page('https://github.com/login');

test('Login', async () => {
    await PageModelImportT.login();
});
