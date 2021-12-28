import * as path from 'path';

const loginUrl = path.join(__dirname, './pages/login-page.html');

import { Role, Selector } from 'testcafe';

const payingUser = Role(loginUrl, async t => {
    await t
        .typeText('#login', 'User1')
        .typeText('#password', 'pa$$w0rd')
        .click('#sign-in');
});

fixture`TestController.useRole`
    .page`./pages/paid.html`;

test('Paid content is displayed for paying users', async t => {
    await t
        .useRole(payingUser)
        .expect(Selector('#paid-content').visible).ok()
        .useRole(Role.anonymous())
        .expect(Selector('#paid-content').visible).notOk();
});
