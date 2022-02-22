import { Selector } from 'testcafe';

fixture`Use selector`
    .page('https://devexpress.github.io/testcafe/example/');

const windowsInput = Selector('#windows');

test('Obtain Element State', async t => {
    await t.click(windowsInput);

    const windowsInputChecked = await windowsInput.checked; // returns true

    await t.expect(windowsInputChecked).ok();
});

test('Check header text', async t => {
    const headerText = await Selector('header').textContent;

    await t.expect(headerText).contains('Example');
});
