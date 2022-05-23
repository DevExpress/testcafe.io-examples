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
