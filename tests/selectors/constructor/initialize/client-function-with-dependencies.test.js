import { Selector } from 'testcafe';

const persistentId = 'submit-button';

const element = Selector(() => {
    return document.getElementById(persistentId);
}, {
    dependencies: { persistentId },
});

fixture`Initialize selector with function on client side with dependencies`
    .page`https://devexpress.github.io/testcafe/example/`;

test('Click on submit', async t => {
    await t.click(element);
});
