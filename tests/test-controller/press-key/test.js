import { Selector } from 'testcafe';

const nameInput = Selector('#developer-name');

fixture`TestController.pressKey`
    .page`https://devexpress.github.io/testcafe/example/`;

test('Key Presses', async t => {
    await t
        .typeText(nameInput, 'Peter Parker')
        .pressKey('home right . delete delete delete delete')
        .expect(nameInput.value).eql('P. Parker');
});
