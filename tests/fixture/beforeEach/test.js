fixture`Fixture.beforeEach`
    .page`https://devexpress.github.io/testcafe/example/`
    .beforeEach(async t => {
        await t.click('#submit-button');
    });

test('Click a button before each', async () => {
    /* ... */
});
