import { Selector } from 'testcafe';

const persistentId = { key: 'id' };

const element = Selector(() => {
    return document.querySelector(`[${persistentId.key}="submit-button"]`);
}, {
    dependencies: { persistentId },
});

fixture`Initialize selector with function on client side with dependencies`
    .page`https://devexpress.github.io/testcafe/example/`;

test('Click on submit', async t => {
    await t.click(element);
});
