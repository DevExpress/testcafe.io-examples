fixture`TestCafe`
    .page('https://www.example.com/');

test('Closing specific windows', async t => {
    const testcafe = await t.openWindow('https://devexpress.github.io/testcafe');

    await t.openWindow('https://devexpress.com');
    const devexpress = await t.getCurrentWindow();

    await t.closeWindow(devexpress)
        .closeWindow(testcafe);
});
