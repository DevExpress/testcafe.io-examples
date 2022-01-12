import { Selector } from 'testcafe';

fixture`TestController.expect.notEql`
    .page`https://devexpress.github.io/testcafe/example/`;

test('Check count of columns', async t => {
    await t.expect(Selector('.column').count).notEql(3);
});

test('NotEql should work', async t => {
    try {
        await t.expect({ a: 'bar' }).notEql({ a: 'bar' }, 'this assertion will fail');
    }
    catch (e) {
        await t.expect(e.errMsg).eql('AssertionError: this assertion will fail: expected { a: \'bar\' } to not deeply equal { a: \'bar\' }');
    }
    await t.expect({ a: 'bar' }).notEql({ a: 'foo' }, 'this assertion will pass');
});
