import { Selector } from 'testcafe';

const checkbox = Selector('#tried-test-cafe');

fixture`TestController.click`
    .page`https://devexpress.github.io/testcafe/example/`;

test('Click a check box and check its state', async t => {
    await t
        .click(checkbox)
        .expect(checkbox.checked).ok();
});
