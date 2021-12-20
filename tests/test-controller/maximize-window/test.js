import { Selector } from 'testcafe';

const submitButton = Selector('#submit-button');

fixture`TestController.maximizeWindow`
    .page`https://devexpress.github.io/testcafe/example/`;

test('Submit button is displayed in full screen', async t => {
    await t
        .maximizeWindow()
        .expect(submitButton.visible).ok();
});
