import PageModel from './page-model';

fixture`TestController page model`
    .page('https://github.com/login');

test('Login', async (t) => {
    await PageModel.login(t);
});