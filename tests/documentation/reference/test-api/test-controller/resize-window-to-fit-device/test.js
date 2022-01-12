import { Selector } from 'testcafe';

const menu = Selector('.sidebar');

fixture`TestController.resizeWindowToFitDevice`
    .page`https://devexpress.github.io/testcafe/documentation/reference`;

test('Menu is displayed on Xperia Z in portrait', async t => {
    await t
        .resizeWindowToFitDevice('Sony Xperia Z', {
            portraitOrientation: true,
        })
        .expect(menu.getStyleProperty('display')).notEql('none');
});
