import { Selector } from 'testcafe';

fixture`TestController.browser`
    .page`https://example.com`;

test('Check browser', async t => {
    if (t.browser.name !== 'Chrome')
        await t.expect(Selector('div').withText('Browser not supported').visible).ok();
});
