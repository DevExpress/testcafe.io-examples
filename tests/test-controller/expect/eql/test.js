import { Selector } from 'testcafe';

fixture`TestController.expect.eql`
    .page`https://devexpress.github.io/testcafe/example/`;

test('Check count of columns', async t => {
    await t.expect(Selector('.column').count).eql(2);
});

test('Eql should work', async t => {
    await t.expect({ a: 'bar' }).eql({ a: 'bar' }, 'this assertion will pass');
    try {
        await t.expect({ a: 'bar' }).eql({ a: 'foo' }, 'this assertion will fail');
    }
    catch (e) {
        await t.expect(e.errMsg).eql('AssertionError: this assertion will fail: expected { a: \'bar\' } to deeply equal { a: \'foo\' }');
    }
});
