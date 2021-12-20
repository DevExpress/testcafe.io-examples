import { Selector } from 'testcafe';

const image = Selector('.qa-guy');

fixture`TestController.resizeWindow`
    .page`https://devexpress.github.io/testcafe/`;

test('Image disappears on small screens', async t => {
    await t
        .resizeWindow(200, 100)
        .expect(image.getStyleProperty('display')).eql('none');
});
