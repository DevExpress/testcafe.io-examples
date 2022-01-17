import { Selector } from 'testcafe';

fixture`TestController.expect.notWithin`
    .page`https://devexpress.github.io/testcafe/example/`;

test('ScrollTop of the \'html\' element shouldn\'t be within 100 and 200', async t => {
    await t.scroll('html', 'bottom');
    await t.expect(Selector('html').scrollTop).notWithin(100, 200);
});

test('NotWithin should work', async t => {
    await t.expect(1).notWithin(3, 10, 'this assertion will pass');
});
