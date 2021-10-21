import { Selector } from 'testcafe';

// A selector is created from a CSS selector string.
const submitButton = Selector('#submit-button');

fixture `Initialize selector with CSS selector`
    .page `https://devexpress.github.io/testcafe/example/`;

test('Button with id "#submit-button" exists', async (t) => {
    await t.expect(submitButton.exists).ok();
});
