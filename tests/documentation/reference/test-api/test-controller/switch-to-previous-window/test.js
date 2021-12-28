fixture`TestController.switchToPreviousWindow`
    .page('https://testcafe.io/');

test('Switch to the previous window', async t => {
    await t
        .openWindow('https://devexpress.com')
        .switchToPreviousWindow();

    const url = await t.eval(() => document.documentURI);

    await t.expect(url).eql('https://testcafe.io/');
});
