fixture('[API] Get Cookies')
    .page('https://devexpress.github.io/testcafe/example/');

test('Should retrieve all cookies with the specified url', async t => {
    //set a cookie for the Example page
    await t.setCookies({ name: 'apiCookie1', value: 'value1' });

    //set a cookie for the 'Thank you' page
    await t.setCookies({
        name:  'apiCookie2',
        value: 'value2',
    }, 'https://devexpress.github.io/testcafe/example/thank-you.html');

    //retrieve all cookies from devexpress.github.io
    let cookies = await t.getCookies({ domain: 'devexpress.github.io' });

    await t.expect(cookies.length).eql(2);

    //retrieve all the cookies from the Example page
    cookies = await t.getCookies({ domain: 'devexpress.github.io', path: '/testcafe/example/' });
    await t
        .expect(cookies.length).eql(1)
        .expect(cookies[0]).contains({ name: 'apiCookie1', value: 'value1' });

    //retrieve all the cookies from the 'Thank you' page
    cookies = await t.getCookies({ domain: 'devexpress.github.io', path: '/testcafe/example/thank-you.html' });
    
    //the method returns two cookies, because the Example page cookie
    //applies to the nested 'Thank You' page as well
    await t
        .expect(cookies.length).eql(2)
        .expect(cookies[0]).contains({ name: 'apiCookie1', value: 'value1' })
        .expect(cookies[1]).contains({ name: 'apiCookie2', value: 'value2' });
});
