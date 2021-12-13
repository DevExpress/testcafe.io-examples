import { Selector } from 'testcafe';

const submitButton = Selector('#submit-button');

fixture`Parameter as Promise by Selector`
    .page`https://devexpress.github.io/testcafe/example/`;

test('Click submit', async t => {
    // Click will be performed on the element specified by the selector
    // as soon as the promise is resolved.
    await t.click(submitButton());
});
