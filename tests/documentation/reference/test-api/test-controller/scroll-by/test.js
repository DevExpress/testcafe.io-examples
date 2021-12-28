fixture`TestController.scrollBy`
    .page`https://devexpress.github.io/testcafe/example/`;

test('Scroll the webpage', async t => {
    await t.scrollBy(500, -10);
});
