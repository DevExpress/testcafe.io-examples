import { Selector } from 'testcafe';

const nameInput = Selector('#developer-name');

fixture`TestController.typeText`
    .page`https://devexpress.github.io/testcafe/example/`;

test('Type and Replace', async t => {
    await t
        .typeText(nameInput, 'Peter')
        .typeText(nameInput, 'Paker', { replace: true })
        .typeText(nameInput, 'r', { caretPos: 2 })
        .expect(nameInput.value).eql('Parker');
});
