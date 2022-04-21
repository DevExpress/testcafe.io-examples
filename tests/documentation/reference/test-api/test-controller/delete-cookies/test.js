fixture`[API] Delete Cookies`
    .page('https://devexpress.github.io/testcafe/example/')
    .beforeEach(async t => {
        await t.setCookies({ name: 'apiCookie1', value: 'value1' });
    });

test('Should delete a cookia with the specified name', async t => {
    await t.expect((await t.getCookies()).length).eql(1);
    await t.deleteCookies('apiCookie1', 'https://devexpress.github.io/testcafe/example/');
    await t.expect((await t.getCookies()).length).eql(0);
});