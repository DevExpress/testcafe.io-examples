import { Selector } from 'testcafe';

fixture`TestController.expect.notOk`
    .page`https://devexpress.github.io/testcafe/example/`;

test('Element shouldn\'t exists', async t => {
    await t.expect(Selector('#element').exists).notOk();
});

test('NotOk should work', async t => {
    try {
        await t.expect('ok').notOk('this assertion will fail');
    }
    catch (e) {
        await t.expect(e.errMsg).eql('AssertionError: this assertion will fail: expected \'ok\' to be falsy');
    }
    await t.expect(false).notOk('this assertion will pass');
});
