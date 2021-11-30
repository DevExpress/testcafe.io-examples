fixture`Test.clientScripts`
    .page`https://devexpress.github.io/testcafe/example/`;

test('My test', async () => {
    /* ... */
}).clientScripts({
    module: 'async',
});

test('My test', async () => {
    /* ... */
}).clientScripts({
    page:    /\/testcafe\/example\//,
    content: 'Geolocation.prototype.getCurrentPosition = () => ({latitude: 0, longitude: 0});',
});

test('My test', async () => {
    /* ... */
}).clientScripts('./script.js');

test('My test', async () => {
    /* ... */
}).clientScripts({
    module: 'lodash',
});

const mockDate = `
    Date.prototype.getTime = function () {
        return 42;
    };
`;

test('My test', async () => {
    /* ... */
}).clientScripts({ content: mockDate });

test('My test', async () => {
    /* ... */
}).clientScripts({
    page: /\/user\/profile\//,
    path: './script.js',
});
