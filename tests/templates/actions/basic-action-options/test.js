import { Selector } from 'testcafe';

const nameInput = Selector('#developer-name');

fixture`Action speed`
    .page`https://devexpress.github.io/testcafe/example/`;

test('Type name', async t => {
    await t
        .typeText(nameInput, 'Peter')
        .typeText(nameInput, ' Parker', { speed: 0.1 });
});
