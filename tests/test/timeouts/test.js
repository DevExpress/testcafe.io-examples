fixture`Test.timeouts`
    .page`https://devexpress.github.io/testcafe/example`;

test('My test', async () => {
    /* ... */
}).timeouts({
    pageLoadTimeout:    2000,
    pageRequestTimeout: 60000,
    ajaxRequestTimeout: 60000,
});
