fixture`TestController.setPageLoadTimeout`
    .page`https://devexpress.github.io/testcafe/example/`;

test('Page load timeout', async t => {
    await t
        .setPageLoadTimeout(0)
        .navigateTo('https://devexpress.github.io/testcafe/');
});
