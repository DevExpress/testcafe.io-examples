fixture('[API] Delete Cookies')
    .page('https://devexpress.github.io/testcafe/example/');

test('Should delete all the cookies with the specified url', async t => {
    //set a cookie for the Example page
    await t.setCookies({ name: 'apiCookie1', value: 'value1' });

    //set a cookie for the 'Thank you' page
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

    //delete cookies from the 'Thank you' page
    await t.deleteCookies({ domain: 'devexpress.github.io', path: '/testcafe/example/thank-you.html' });

    //check the cookies
    cookies = await t.getCookies();

    await t
        .expect(cookies.length).eql(1)
        .expect(cookies[0]).contains({ name: 'apiCookie1', path: '/testcafe/example/' });
});
