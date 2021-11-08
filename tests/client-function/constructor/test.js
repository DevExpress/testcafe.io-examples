import { ClientFunction, Selector } from 'testcafe';

const articleHeader = Selector('header>h1');

const getArticleHeaderHTML = ClientFunction(() => articleHeader().innerHTML, {
    dependencies: { articleHeader },
});

fixture`ClientFunction.constructor`
    .page`https://devexpress.github.io/testcafe/example/`;

test('Check innerHtml', async t => {
    await t.expect(getArticleHeaderHTML()).eql('Example');
});
