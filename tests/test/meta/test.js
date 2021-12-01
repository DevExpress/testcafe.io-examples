fixture`Test.meta`
    .page`https://devexpress.github.io/testcafe/example/`;

test('My test', async () => {
    /* ... */
}).meta('key1', 'value1');

test('My test', async () => {
    /* ... */
}).meta({ key1: 'value1', key2: 'value2', key3: 'value3' });
