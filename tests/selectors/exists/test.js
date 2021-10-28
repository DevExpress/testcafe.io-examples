import { Selector } from 'testcafe';

fixture`Selector.exists`
    .page`http://devexpress.github.io/testcafe/example/`;

test('Button with id "submit-button" exists', async t => {
    const submitButtonExists = Selector('#submit-button').exists;

    await t.expect(submitButtonExists).ok();
});
