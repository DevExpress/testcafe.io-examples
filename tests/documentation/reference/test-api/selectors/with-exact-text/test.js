import { Selector } from 'testcafe';

fixture`Selector.withExactText`
    .page`http://devexpress.github.io/testcafe/example/`;

test('Elements exist', async t => {
    // Selects elements of the 'label' tag
    // whose text exactly matches 'I have tried TestCafe'.
    // Does not match 'bar', 'foobar', 'Foo'.
    const elWithText = Selector('label').withExactText('I have tried TestCafe');

    await t.expect(elWithText.exists).ok();
});
