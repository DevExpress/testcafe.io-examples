import { Selector } from 'testcafe';

fixture`TestController.expect.within`
    .page`https://devexpress.github.io/testcafe/example/`;

test('ScrollTop of the \'html\' element should be within 200 and 300', async t => {
    await t.click('#submit-button');
    await t.expect(Selector('html').scrollTop).within(200, 300);
});

test('Within should work', async t => {
    await t.expect(5).within(3, 10, 'this assertion will pass');
});
