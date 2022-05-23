fixture`[API] Set Cookies`
    .page('https://devexpress.github.io/testcafe/example/');

test('Should set cookies with special properties', async t => {
    const cookieObject = { name: 'apiCookie1', value: 'value1', domain: 'localhost', httpOnly: true };

    await t.setCookies(cookieObject);

    const cookies = await t.getCookies();

    await t
        .expect(cookies.length).eql(1)
        .expect(cookies[0]).contains(cookieObject);
});
