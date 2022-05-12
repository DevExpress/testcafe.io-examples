fixture`[API] Delete Cookies`
    .page('https://devexpress.github.io/testcafe/example/');

test('Should delete the cookie with the specified name', async t => {
    await t.setCookies({ name: 'apiCookie1', value: 'value1' });
    await t.expect((await t.getCookies()).length).eql(1);

    await t.deleteCookies('apiCookie1');
    await t.expect((await t.getCookies()).length).eql(0);
});

fixture('[API] Delete Cookies')
    .page('https://devexpress.github.io/testcafe/example/');

test('Should delete cookies with the specified url', async t => {
    //set a cookie for the examples page
    await t.setCookies({ name: 'apiCookie1', value: 'value1' });

    //set a cookie for localhost
    await t.setCookies({ name: 'apiCookie2', value: 'value2' }, 'http://localhost');

    //check the total number of cookies
    await t.expect((await t.getCookies()).length).eql(2);

    //delete the localhost cookie
    await t.deleteCookies('apiCookie2', 'http://localhost');

    const cookies = await t.getCookies();

    await t
        .expect(cookies.length).eql(1)
        .expect(cookies[0]).contains({ name: 'apiCookie1', value: 'value1', domain: 'devexpress.github.io' });
});

fixture('[API] Delete Cookies')
    .page('https://devexpress.github.io/testcafe/example/');

test('Should delete all the cookies with the specified url', async t => {
    //set a cookie for the examples page
    await t.setCookies({ name: 'apiCookie1', value: 'value1' });

    //set a cookie for the 'thank you' page
    await t.setCookies({
        name:  'apiCookie2',
        value: 'value2',
    }, 'https://devexpress.github.io/testcafe/example/thank-you.html');

    //check the cookies
    let cookies = await t.getCookies();

    await t
        .expect(cookies.length).eql(2)
        .expect(cookies[0]).contains({ name: 'apiCookie1', path: '/testcafe/example/' })
        .expect(cookies[1]).contains({ name: 'apiCookie2', path: '/testcafe/example/thank-you.html' });

    //delete cookies from the 'thank you' page
    await t.deleteCookies({ domain: 'devexpress.github.io', path: '/testcafe/example/thank-you.html' });

    //check the cookies
    cookies = await t.getCookies();

    await t
        .expect(cookies.length).eql(1)
        .expect(cookies[0]).contains({ name: 'apiCookie1', path: '/testcafe/example/' });
});
