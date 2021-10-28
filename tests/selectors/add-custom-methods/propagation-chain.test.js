import { Selector } from 'testcafe';

fixture`Selector.addCustomMethods propagation in the chain`
    .page`https://devexpress.github.io/testcafe/example/`;

test('Check Label HTML', async t => {
    const fieldSet = Selector('fieldset')
        .addCustomDOMProperties({
            legend: el => el.querySelector('legend').innerText,
        })
        .addCustomMethods({
            getLabel: (el, idx) => {
                return el[0].elements[idx].labels[0];
            },
        }, {
            returnDOMNodes: true,
        });

    // This assertion passes.
    await t.expect(fieldSet.nth(1).legend).eql('Which features are important to you:');

    // This line throws an error.
    try {
        await t.expect(fieldSet.nth(1).getLabel(3).textContent).eql('Easy embedding into a Continuous integration system');
    }
    catch (err) {
        await t.expect(err.errMsg).eql('TypeError: Cannot read properties of null (reading \'innerText\')');
    }


    // When TestCafe evaluates "getLabel(3)", it also tries to propagate
    // the "legend" property to the result. So, it queries for a
    // <legend> inside the <label> element, which returns nothing.
});
