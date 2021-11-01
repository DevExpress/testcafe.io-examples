import { Selector } from 'testcafe';

fixture`Selector.withAttribute`
    .page`http://devexpress.github.io/testcafe/example/`;

test('Elements exist', async t => {
    // Selects label elements that have the 'for' attribute.
    // This attribute can have any value.
    const elWithAttrName = Selector('label').withAttribute('for');

    // Selects label elements whose 'for' attribute
    // is set to 'background-parallel-testing'. Does not match
    // the 'class' attribute, or the 'for' attribute
    // with the 'continuous-integration-embedding' value.
    const elWithAttrNameAndValue = Selector('label').withAttribute('for', 'background-parallel-testing');

    // Selects input elements that have an attribute whose
    // name matches the /data-/ regular expression.
    // This attribute must have a value that matches
    // the /in/ regular expression.
    // Matches the 'data-testid' attributes with the
    // 'Windows' and 'Linux' values.
    // Does not match the 'name' or 'value' attribute,
    // as well as any attribute with the 'macos-radio'
    // or 'tried-testcafe-checkbox' value.
    const elWithRegExpAttr = Selector('input').withAttribute(/data-/, /in.*-radio/);

    await t.expect(elWithAttrName.exists).ok();
    await t.expect(elWithAttrNameAndValue.exists).ok();
    await t.expect(elWithRegExpAttr.count).eql(2);
});
