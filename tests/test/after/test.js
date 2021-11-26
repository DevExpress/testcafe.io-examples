fixture`Test.after`
    .page`https://devexpress.github.io/testcafe/example/`;

test
    .after(async t => {
        await t.click('[data-testid="remote-testing-checkbox"]');
    })('Click on checkbox', async () => {
        /* ... */
    });
