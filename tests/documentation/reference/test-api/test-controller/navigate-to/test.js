import path from 'path';

fixture`TestController.navigateTo`
    .page`https://devexpress.github.io/testcafe`;

test('Navigate to the Docs', async t => {
    await t
        .navigateTo('https://devexpress.github.io/testcafe/documentation/');
});

fixture`TestController.navigateTo`
    .page`https://devexpress.github.io/testcafe`;

test('Navigate to local pages', async t => {
    await t
        .navigateTo(`file:///${path.join(__dirname, './index.html')}`)
        .navigateTo('./index.html');
});
