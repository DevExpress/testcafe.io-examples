fixture`TestController.switchToWindow`
    .page('https://devexpress.github.io/testcafe/');

test('Switch to a different window', async t => {
    const homepage      = await t.getCurrentWindow();
    const documentation = await t.openWindow('https://devexpress.github.io/testcafe/documentation');

    await t.switchToWindow(homepage)
        .switchToWindow(documentation);
});

fixture `TestController.switchToWindow`
    .page('https://www.example.com/');

test('Switching between different windows', async t => {
    await t.openWindow('https://devexpress.github.io/testcafe')
        .openWindow('https://devexpress.com')
        .switchToWindow(w => w.url.host === 'testcafe.io')
        .switchToWindow(w => w.title === 'Example Domain' && w.url.host === 'www.example.com');
});
