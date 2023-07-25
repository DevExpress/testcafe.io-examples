fixture`[API] Get Cookies`
    .page('https://devexpress.github.io/testcafe/example/');

test('Should retrieve a cookie by name', async t => {
    //set a cookie for the Example page
    await t.setCookies({ name: 'apiCookie1', value: 'value1' });
    
    //retrieve the named cookie from any of the tested pages
    const cookies = await t.getCookies('apiCookie1');
    const { name, value } = cookies[0];

    await t
        .expect(name).eql('apiCookie1')
        .expect(value).eql('value1');
});
