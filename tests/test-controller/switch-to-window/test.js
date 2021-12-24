fixture`TestController.switchToWindow`
    .page('https://devexpress.github.io/testcafe/');

test('Switch to a different window', async t => {
    const homepage      = await t.getCurrentWindow();
    const documentation = await t.openWindow('https://devexpress.github.io/testcafe/documentation');

    await t.switchToWindow(homepage)
        .switchToWindow(documentation);
});
