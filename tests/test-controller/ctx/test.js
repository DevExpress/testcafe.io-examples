fixture`TestController.ctx`
    .beforeEach(async t => {
        t.ctx.someProp = 123;
    });

test('Check context', async t => {
    await t.expect(t.ctx.someProp).eql(123); // > 123
}).after(async t => {
    await t.expect(t.ctx.someProp).eql(123); // > 123
});
