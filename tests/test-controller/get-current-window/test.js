fixture`TestController.getCurrentWindow`
    .page('https://devexpress.github.io/testcafe/example/');

test('Should close curren window', async t => {
    await t.openWindow('https://devexpress.com');

    const devexpress = await t.getCurrentWindow();

    await t.closeWindow(devexpress);
});
