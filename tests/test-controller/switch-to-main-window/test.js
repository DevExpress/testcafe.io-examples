fixture`TestController.switchToMainWindow`
    .page`https://www.devexpress.com/`;

test('Switching back to main window', async t => {
    await t
        .click('#TOCChatLink')
        .switchToIframe('#chat-widget')
        .typeText('#name', 'My name')
        .switchToMainWindow()
        .click('[data-event="DownloadTrialHomeLightbox"]');
});
