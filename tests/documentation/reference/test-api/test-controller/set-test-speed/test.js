import { Selector } from 'testcafe';

fixture`TestController.setTestSpeed`
    .page`https://devexpress.github.io/testcafe/example/`;

const nameInput = Selector('#developer-name');

test('Test Speed', async t => {
    await t
        .typeText(nameInput, 'Peter')
        .setTestSpeed(0.1)
        .typeText(nameInput, ' Parker');
});
