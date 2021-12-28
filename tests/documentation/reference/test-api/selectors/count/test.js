import { Selector } from 'testcafe';

fixture`Selector.count`
    .page`http://devexpress.github.io/testcafe/example/`;

test('Check count of the columns', async t => {
    const osCount = Selector('.column.col-2 label').count;

    await t.expect(osCount).eql(3);
});
