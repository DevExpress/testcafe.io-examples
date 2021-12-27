import * as path from 'path';

const loginUrl = path.join(__dirname, './pages/login-page.html');

import { Role, Selector } from 'testcafe';

const registeredUser = Role(loginUrl, async t => {
    await t
        .typeText('#login', 'User1')
        .typeText('#password', 'pa$$w0rd')
        .click('#sign-in');
});

fixture`TestController.useRole`
    .page`./pages/index.html`;

test('Check avatar after login', async t => {
    await t
        .useRole(registeredUser)
        .expect(Selector('#avatar').visible).ok();
});
