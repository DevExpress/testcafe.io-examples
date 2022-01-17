import { Selector } from 'testcafe';

const nameInput = Selector('#developer-name');

fixture`Click options`
    .page`https://devexpress.github.io/testcafe/example/`;

test('Fix name', async t => {
    await t
        .typeText(nameInput, 'Pete Parker')
        .click(nameInput, { caretPos: 4 })
        .pressKey('r');
});
