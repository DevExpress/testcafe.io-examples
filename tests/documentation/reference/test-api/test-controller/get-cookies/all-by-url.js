fixture('[API] Get Cookies')
    .page('https://devexpress.github.io/testcafe/example/');

test('Should retrieve all cookies with the specified url', async t => {
    //set a cookie for the examples page
    await t.setCookies({ name: 'apiCookie1', value: 'value1' });

    //set a cookie for the 'thank you' page
    await t.setCookies({
        name:  'apiCookie2',
        value: 'value2',
    }, 'https://devexpress.github.io/testcafe/example/thank-you.html');

    //retrieve all the cookies from devexpress.github.io
    let cookies = await t.getCookies({ domain: 'devexpress.github.io' });

    await t.expect(cookies.length).eql(2);

    //retrieve all the cookies from the examples page
    cookies = await t.getCookies({ domain: 'devexpress.github.io', path: '/testcafe/example/' });
    await t
        .expect(cookies.length).eql(1)
        .expect(cookies[0]).contains({ name: 'apiCookie1', value: 'value1' });

    //retrieve all the cookies from the 'thank you' page
    cookies = await t.getCookies({ domain: 'devexpress.github.io', path: '/testcafe/example/thank-you.html' });
    await t
        .expect(cookies.length).eql(2)
        .expect(cookies[0]).contains({ name: 'apiCookie1', value: 'value1' })
        .expect(cookies[1]).contains({ name: 'apiCookie2', value: 'value2' });
});
