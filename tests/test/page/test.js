import path from 'path';

fixture`Test.page`
    .page`http://devexpress.github.io/testcafe/example`;

test.page`http://devexpress.github.io/testcafe/blog/`('My test', async () => {
    // Starts at http://devexpress.github.io/testcafe/blog/
});

test.page`file://${path.join(__dirname, './index.html')}`('My test', async () => {
    // Starts at file://${path.join(__dirname, './index.html')}
});

test.page`file:///${path.join(__dirname, './index.html')}`('My test', async () => {
    // Starts at file://${path.join(__dirname, './index.html')}
});

test.page`./index.html`('My test', async () => {
    // Starts at ../my-project/index.html
});
