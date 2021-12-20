fixture`TestController.openWindow`
    .page`https://www.example.com/`;

test('Open the TestCafe website', async t => {
    await t
        .openWindow('https://devexpress.github.io/testcafe')
        .openWindow('./documentation');
});
