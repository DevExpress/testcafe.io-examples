fixture`TestController.switchToParentWindow`
    .page('https://testcafe.io/');

test('Switch to the parent window', async t => {
    await t
        .openWindow('https://devexpress.com')
        .switchToParentWindow();

    const url = await t.eval(() => document.documentURI);

    await t.expect(url).eql('https://testcafe.io/');
});
