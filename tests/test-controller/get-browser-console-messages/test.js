// test.js
import checkConsoleMessages from './check-console-messages';

fixture`TestController.getBrowserConsoleMessages`
    .page`./index.html`
    .afterEach(() => checkConsoleMessages());

test('Send name', async t => {
    await t
        .typeText('#name', 'Name')
        .click('#button');
});
