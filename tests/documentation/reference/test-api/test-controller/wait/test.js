import { Selector } from 'testcafe';

const header = Selector('#article-header');

fixture`TestController.wait`
    .page`./pages/index.html`;

test('Wait Example', async t => {
    await t
        .click('#play-1-sec-animation')
        .wait(1000)
        .expect(header.getStyleProperty('opacity')).eql('0');
});
