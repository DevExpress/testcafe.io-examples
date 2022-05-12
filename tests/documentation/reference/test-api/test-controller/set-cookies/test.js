fixture`[API] Set Cookies`
    .page('https://devexpress.github.io/testcafe/example/');

test('Should set cookies by name and value', async t => {
    await t.setCookies({ apiCookie1: 'value1' }, 'http://localhost');

    const cookies = await t.getCookies();

    const { name, value, domain, path } = cookies[0];

    await t
        .expect(name).eql('apiCookie1')
        .expect(value).eql('value1')
        .expect(domain).eql('localhost')
        .expect(path).eql('/');
});

fixture`[API] Set Cookies`
    .page('https://devexpress.github.io/testcafe/example/');

test('Should assign cookies to the specified url', async t => {
    //set a cookie for the examples page
    await t.setCookies({ name: 'apiCookie1', value: 'value1' }, 'https://devexpress.github.io/testcafe/example/');

    //set a cookie for localhost
    await t.setCookies({ name: 'apiCookie2', value: 'value2' }, 'http://localhost');

    //retrieve all the cookies
    const cookies = await t.getCookies();

    await t
        .expect(cookies.length).eql(2)
        .expect(cookies[0]).contains({ name: 'apiCookie1', value: 'value1', domain: 'devexpress.github.io' })
        .expect(cookies[1]).contains({ name: 'apiCookie2', value: 'value2', domain: 'localhost' });
});

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
