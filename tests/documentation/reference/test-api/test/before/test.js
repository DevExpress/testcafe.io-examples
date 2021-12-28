fixture`Test.before`
    .page`https://devexpress.github.io/testcafe/example/`;

test
    .before(async t => {
        await t.click('#preferred-interface');
    })('Click on checkbox', async () => {
        /* ... */
    });
