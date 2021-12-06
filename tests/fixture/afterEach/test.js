fixture`Fixture.afterEach`
    .page`https://devexpress.github.io/testcafe/example/`
    .afterEach(async t => {
        await t.click('#submit-button');
    });

test('Click a button after each', async () => {
    /* ... */
});
