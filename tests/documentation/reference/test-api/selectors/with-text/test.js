import { Selector } from 'testcafe';

fixture`Selector.withText`
    .page`./index.html`;

test('Elements exist', async t => {
    // Selects label elements that contain 'foo'.
    // Matches 'foo', 'foobar'. Does not match 'bar', 'Foo'.
    const elWithTextFoo = Selector('label').withText('foo');

    // Selects div elements whose text matches
    // the /a[b-e]/ regular expression.
    // Matches 'ab', 'ac'. Does not match 'bb', 'aa'.
    const elWithRegExp = Selector('div').withText(/a[b-e]/);

    // This selector matches the parent div (.container)
    // and then the child div (.child)
    const elWithChild = Selector('div').withText('foo');

    await t.expect(elWithTextFoo.exists).ok();
    await t.expect(elWithRegExp.exists).ok();
    await t.expect(elWithChild.exists).ok();
});
