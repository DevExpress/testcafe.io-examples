import { test } from 'testcafe';

fixture`Test import`
    .page('https://devexpress.github.io/testcafe/example');

test('Click a button', async t => {
    await t.click('#submit-button');
});
