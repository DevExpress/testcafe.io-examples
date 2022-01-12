import { ClientFunction, Selector } from 'testcafe';

fixture`TestController.selectText`
    .page`https://devexpress.github.io/testcafe/example/`;

const developerNameInput = Selector('#developer-name');

const getElementSelectionStart = ClientFunction(selector => selector().selectionStart);
const getElementSelectionEnd   = ClientFunction(selector => selector().selectionEnd);

test('Select text within input', async t => {
    await t
        .typeText(developerNameInput, 'Test Cafe', { caretPos: 0 })
        .selectText(developerNameInput, 7, 1);

    await t
        .expect(await getElementSelectionStart(developerNameInput)).eql(1)
        .expect(await getElementSelectionEnd(developerNameInput)).eql(7);
});
