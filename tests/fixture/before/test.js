fixture`Fixture.before`
    .page`https://devexpress.github.io/testcafe/example/`
    .before(async ctx => {
        ctx.db = { name: 'test' };
    });

test('Check "db" information', async (t) => {
    await t.expect(t.fixtureCtx.db).eql({ name: 'test' });
});
