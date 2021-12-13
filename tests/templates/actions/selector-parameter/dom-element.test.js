fixture`Parameter as DOM element`
    .page`https://devexpress.github.io/testcafe/example/`;

test('Click first child of the body', async t => {

    // Click will be performed on the element returned by the function,
    // which is the third child of the document's body.
    await t.click(() => document.body.children[0]);
});
