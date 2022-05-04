fixture`[API] Delete Cookies`
    .page('https://devexpress.github.io/testcafe/example/');

test('Should delete a cookie with the specified name', async t => {
    await t.setCookies({ name: 'apiCookie1', value: 'value1' });
    await t.expect((await t.getCookies()).length).eql(1);

    await t.deleteCookies('apiCookie1');
    await t.expect((await t.getCookies()).length).eql(0);
});

fixture('[API] Delete Cookies')
    .page('https://devexpress.github.io/testcafe/example/');

test('Should delete cookies for a specified url', async t => {
    //set a cookie for example's page
    await t.setCookies({ name: 'apiCookie1', value: 'value1' });

    //set a cookie for localhost page
    await t.setCookies({ name: 'apiCookie2', value: 'value2' }, 'http://localhost');

    //check all tested page cookies
    await t.expect((await t.getCookies()).length).eql(2);

    //delete localhost page's cookie
    await t.deleteCookies('apiCookie2', 'http://localhost');

    const cookies = await t.getCookies();

    await t
        .expect(cookies.length).eql(1)
        .expect(cookies[0]).contains({ name: 'apiCookie1', value: 'value1', domain: 'devexpress.github.io' });
});

fixture('[API] Delete Cookies')
    .page('https://devexpress.github.io/testcafe/example/');

test('Should delete all cookies for specified url', async t => {
    //set a cookie for example's page
    await t.setCookies({ name: 'apiCookie1', value: 'value1' });

    //set a cookie for thank-you's page
    await t.setCookies({
        name:  'apiCookie2',
        value: 'value2',
    }, 'https://devexpress.github.io/testcafe/example/thank-you.html');

    //check cookies
    let cookies = await t.getCookies();

    await t
        .expect(cookies.length).eql(2)
        .expect(cookies[0]).contains({ name: 'apiCookie1', path: '/testcafe/example/' })
        .expect(cookies[1]).contains({ name: 'apiCookie2', path: '/testcafe/example/thank-you.html' });

    //delete cookies from thank-you page
    await t.deleteCookies({ domain: 'devexpress.github.io', path: '/testcafe/example/thank-you.html' });

    //check cookies
    cookies = await t.getCookies();

    await t
        .expect(cookies.length).eql(1)
        .expect(cookies[0]).contains({ name: 'apiCookie1', path: '/testcafe/example/' });
});
