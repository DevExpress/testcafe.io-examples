fixture`TestController.fixtureCtx`
    .before(async ctx => {
        ctx.someProp = 123;
    })
    .after(async ctx => {
        if (ctx.someProp !== 123)
            throw new Error('Incorrect value of the context!');
    });

test('Check the value of the context', async t => {
    await t.expect(t.fixtureCtx.someProp).eql(123);
});


fixture`TestController.fixtureCtx`
    .before(async ctx => {
        ctx.someProp = 123;
    })
    .after(async ctx => {
        if (ctx.newProp !== 'abc')
            throw new Error('Incorrect value of the context!');
    });

test('Check the value of the context', async t => {
    await t.expect(t.fixtureCtx.someProp).eql(123);
});

test('Assignment the new value in the context', async t => {
    t.fixtureCtx.newProp = 'abc';
});
