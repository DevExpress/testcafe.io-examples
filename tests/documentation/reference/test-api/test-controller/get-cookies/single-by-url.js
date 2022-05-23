fixture('[API] Get Cookies')
    .page('https://devexpress.github.io/testcafe/example/');

test('Should retrieve a cookie with the specified url', async t => {
    //set a cookie for the examples page
    await t.setCookies({ name: 'apiCookie1', value: 'value1' });

    //set a cookie for localhost
    await t.setCookies({ name: 'apiCookie2', value: 'value2' }, 'http://localhost');

    //retrieve all the cookies
    let cookies = await t.getCookies(['apiCookie1', 'apiCookie2']);

    await t.expect(cookies.length).eql(2);

    //retrieve cookies from the examples page
    cookies = await t.getCookies(['apiCookie1', 'apiCookie2'], 'https://devexpress.github.io/testcafe/example/');
    await t.expect(cookies.length).eql(1);

    //retrieve cookies from localhost
    cookies = await t.getCookies(['apiCookie1', 'apiCookie2'], 'https://localhost');
    await t.expect(cookies.length).eql(1);
});
