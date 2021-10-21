import { Selector } from 'testcafe';

const elementWithId = Selector(id => {
    return document.getElementById(id);
});

fixture `Initialize selector with function on client side with param`
    .page `https://devexpress.github.io/testcafe/example/`;

test('Click on submit', async t => {
    await t.click(elementWithId('submit-button'));
});
