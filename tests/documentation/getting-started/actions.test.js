// eslint-disable-next-line no-unused-vars
import { Selector } from 'testcafe';

fixture`Getting Started`
    .page`https://devexpress.github.io/testcafe/example`;

test('My first test', async t => {
    await t
        .typeText('#developer-name', 'John Smith')
        .click('#submit-button');
});
