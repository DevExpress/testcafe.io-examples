fixture`Parameter as css selector string`
    .page`https://devexpress.github.io/testcafe/example/`;

test('Click submit', async t => {

    // Click will be performed on the first element
    // that matches the CSS selector.
    await t.click('#submit-button');
});
