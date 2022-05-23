fixture`[API] Delete Cookies`
    .page('https://devexpress.github.io/testcafe/example/');

test('Should delete the cookie with the specified name', async t => {
    await t.setCookies({ name: 'apiCookie1', value: 'value1' });
    await t.expect((await t.getCookies()).length).eql(1);

    await t.deleteCookies('apiCookie1');
    await t.expect((await t.getCookies()).length).eql(0);
});
