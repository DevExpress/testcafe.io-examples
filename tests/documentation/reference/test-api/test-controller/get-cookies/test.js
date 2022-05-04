fixture`[API] Get Cookies`
    .page('https://devexpress.github.io/testcafe/example/')
    .beforeEach(async t => {
        await t.setCookies({ name: 'apiCookie1', value: 'value1' });
    });

test('Should get cookies by name', async t => {
    const cookies         = await t.getCookies('apiCookie1');
    const { name, value } = cookies[0];

    await t
        .expect(name).eql('apiCookie1')
        .expect(value).eql('value1');
});

fixture('[API] Get Cookies')
    .page('https://devexpress.github.io/testcafe/example/');

test('Should get cookies for a specified url', async t => {
    //set a cookie for example's page
    await t.setCookies({ name: 'apiCookie1', value: 'value1' });

    //set a cookie for localhost page
    await t.setCookies({ name: 'apiCookie2', value: 'value2' }, 'http://localhost');

    //get all tested pages' cookies
    let cookies = await t.getCookies(['apiCookie1', 'apiCookie2']);

    await t.expect(cookies.length).eql(2);

    //get example page's cookies
    cookies = await t.getCookies(['apiCookie1', 'apiCookie2'], 'https://devexpress.github.io/testcafe/example/');
    await t.expect(cookies.length).eql(1);

    //get localhost page's cookies
    cookies = await t.getCookies(['apiCookie1', 'apiCookie2'], 'https://localhost');
    await t.expect(cookies.length).eql(1);
});

fixture('[API] Get Cookies')
    .page('https://devexpress.github.io/testcafe/example/');

test('Should get all cookies for specified url', async t => {
    //set a cookie for example's page
    await t.setCookies({ name: 'apiCookie1', value: 'value1' });

    //set a cookie for thank-you's page
    await t.setCookies({
        name:  'apiCookie2',
        value: 'value2',
    }, 'https://devexpress.github.io/testcafe/example/thank-you.html');

    //get all cookies for devexpress.github.io
    let cookies = await t.getCookies({ domain: 'devexpress.github.io' });

    await t.expect(cookies.length).eql(2);

    //get all cookies for example's page
    cookies = await t.getCookies({ domain: 'devexpress.github.io', path: '/testcafe/example/' });
    await t
        .expect(cookies.length).eql(1)
        .expect(cookies[0]).contains({ name: 'apiCookie1', value: 'value1' });

    //get all cookies for thank-you's page
    cookies = await t.getCookies({ domain: 'devexpress.github.io', path: '/testcafe/example/thank-you.html' });
    await t
        .expect(cookies.length).eql(2)
        .expect(cookies[0]).contains({ name: 'apiCookie1', value: 'value1' })
        .expect(cookies[1]).contains({ name: 'apiCookie2', value: 'value2' });
});
