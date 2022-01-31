import { Selector } from 'testcafe';

const articleString   = Selector('#article-content');
// or
const articleFunction = Selector(() => {
    return document.getElementById('article-content');
});

fixture`Select page element - create Selectors`
    .page('./pages/article-content.html');

test('Selectors exists', async (t) => {
    await t.expect(articleString.exists).ok()
        .expect(articleFunction.exists).ok();
});

