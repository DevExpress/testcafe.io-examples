import { Selector } from 'testcafe';

fixture`TestController.expect.ok`
    .page`https://devexpress.github.io/testcafe/example/`;

test('Element should exists', async t => {
    await t.expect(Selector('#developer-name').exists).ok();
});

test('Ok should work', async t => {
    await t.expect('ok').ok('this assertion will pass');
    try {
        await t.expect(false).ok('this assertion will fail');
    }
    catch (e) {
        await t.expect(e.errMsg).eql('AssertionError: this assertion will fail: expected false to be truthy');
    }
});
