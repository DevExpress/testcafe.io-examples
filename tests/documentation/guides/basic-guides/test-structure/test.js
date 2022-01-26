/* eslint-disable no-unused-vars */
fixture`Test structure`
    .page`https://devexpress.github.io/testcafe/example`;

test('Test1', async t => {
    // Starts at http://devexpress.github.io/testcafe/example
});

fixture`Test structure`;

test('Test1', async t => {
    /* Test 1 Code */
});

test('Test2', async t => {
    /* Test 2 Code */
});

fixture`Test structure`
    .page`https://devexpress.github.io/testcafe/example`;

test('My test', async t => {
    // Starts at http://devexpress.github.io/testcafe/blog/
}).page`https://devexpress.github.io/testcafe/blog/`;
