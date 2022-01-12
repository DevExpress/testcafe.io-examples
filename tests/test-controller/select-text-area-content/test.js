import { ClientFunction, Selector } from 'testcafe';

fixture`TestController.selectTextAreaContent`
    .page `https://devexpress.github.io/testcafe/example/`;

const commentTextArea = Selector('#comments');

const getElementSelectionStart = ClientFunction(selector => selector().selectionStart);
const getElementSelectionEnd   = ClientFunction(selector => selector().selectionEnd);

test('Select text within textarea', async t => {
    await t
        .click('#tried-test-cafe')
        .typeText(commentTextArea, [
            'Lorem ipsum dolor sit amet',
            'consectetur adipiscing elit',
            'sed do eiusmod tempor',
        ].join(',\n'))
        .selectTextAreaContent(commentTextArea, 0, 5, 2, 10);

    await t
        .expect(await getElementSelectionStart(commentTextArea)).eql(5)
        .expect(await getElementSelectionEnd(commentTextArea)).eql(67);
});
