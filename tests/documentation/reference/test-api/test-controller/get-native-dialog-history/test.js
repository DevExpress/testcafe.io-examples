fixture`TestController.getNativeDialogHistory`
    .page`./index.html`;

test('Check native dialogs', async t => {
    await t
        .setNativeDialogHandler((type, text, url) => {
            if (type === 'confirm')
                return true;
            else if (type === 'prompt')
                return 'Hello!';
            return null;
        })
        .click('#show-alert')
        .click('#show-confirm')
        .click('#show-prompt');

    const history = await t.getNativeDialogHistory();

    await t
        .expect(history[0].type).eql('prompt')
        .expect(history[0].text).eql('Say hello')
        .expect(history[1].type).eql('confirm')
        .expect(history[2].type).eql('alert');
});
