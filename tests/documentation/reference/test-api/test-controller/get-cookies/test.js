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