import path from 'path';

fixture`Fixture.page`
    .page`https://devexpress.github.io/testcafe/example`;

test('Starts at https://devexpress.github.io/testcafe/example', async () => {
    /* ... */
});

fixture`Fixture.page`
    .page`file:///${path.join(__dirname, './index.html')}`;

test('Starts at file:///${path.join(__dirname, \'./index.html\')}', async () => {
    /* ... */
});

fixture`Fixture.page`
    .page`./index.html`;

test('Starts at ../my-project/index.html', async () => {
    /* ... */
});
