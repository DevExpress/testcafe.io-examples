import { Selector } from 'testcafe';

fixture`Use selector`
    .page`https://devexpress.github.io/testcafe/example/`;

test('Check if an Element Exists', async t => {
    const osCount            = Selector('.column.col-2 label').count;
    const submitButtonExists = Selector('#submit-button').exists;

    await t
        .expect(osCount).eql(3)
        .expect(submitButtonExists).ok();
});
