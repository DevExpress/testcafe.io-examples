import { Selector } from 'testcafe';

fixture`DOMNodeState`
    .page`https://devexpress.github.io/testcafe/example/`;

test('Check text content', async t => {
    const element = Selector('#tried-section');

    const state = await element();

    const textContent        = state.textContent;
    const awaitedTextContent = await element.textContent;

    await t.expect(textContent).contains('I have tried TestCafe'); // > I have tried TestCafe
    // or
    await t.expect(awaitedTextContent).contains('I have tried TestCafe'); // > I have tried TestCafe
});
