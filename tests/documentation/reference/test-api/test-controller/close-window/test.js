fixture`TestController.closeWindow`
    .page`https://devexpress.github.io/testcafe/example/`;

test('Closing windows', async t => {
    await t.openWindow('https://devexpress.github.io/testcafe')
        .openWindow('https://devexpress.com')
        .closeWindow()
        .closeWindow();
});
