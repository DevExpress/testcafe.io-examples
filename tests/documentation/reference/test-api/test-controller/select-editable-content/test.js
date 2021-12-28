import { Selector } from 'testcafe';

fixture`TestController.selectEditableContent`
    .page`./index.html`;

test('Delete text within a contentEditable element', async t => {
    await t
        .selectEditableContent('#foreword', '#chapter-3')
        .pressKey('delete')
        .expect(Selector('#chapter-2').exists).notOk()
        .expect(Selector('#chapter-4').exists).ok();
});
