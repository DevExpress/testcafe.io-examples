import { Selector } from 'testcafe';

const seeMore = Selector('#article-content')
    .child('div')
    .withText('See more');

fixture`Select page element - create Selectors with chain`
    .page('../pages/article-content.html');

test('Selectors exists', async (t) => {
    await t.expect(seeMore.exists).ok();
});
