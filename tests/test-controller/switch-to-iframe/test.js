import { ClientFunction } from 'testcafe';

fixture`TestController.switchToIframe`
    .page`https://www.devexpress.com/`;

test('Switching to an iframe', async t => {
    const getLocation = ClientFunction(() => window.location.hostname);

    // NOTE: the ClientFunction will be executed in TOP window's context
    await t.expect(getLocation()).eql('www.devexpress.com');

    await t
        .click('#TOCChatLink')
        .switchToIframe('#chat-widget')
        .typeText('#name', 'My name');

    // NOTE: the ClientFunction will be executed in IFRAME window's context
    await t.expect(getLocation()).eql('secure.livechatinc.com');
});

import { Selector } from 'testcafe';

fixture`TestController.switchToIframe`
    .page`https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/Overview/jQuery/Light/`;

test('Wait for an iframe to load', async t => {
    const iframeSelector = Selector('#demoFrame', { timeout: 60000 });

    await t.switchToIframe(iframeSelector);
});
