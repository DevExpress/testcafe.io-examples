import { db } from './my-utils.js';

fixture`Fixture.after`
    .page`https://devexpress.github.io/testcafe/example/`
    .after(async ctx => {
        db.push(ctx.db.name);
    });

test('Send "db" information', async (t) => {
    t.fixtureCtx.db = { name: 'test' };
});
