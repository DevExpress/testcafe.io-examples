import { Selector } from 'testcafe';

fixture`Extend Selectors with Custom Properties and Methods`
    .page`https://devexpress.github.io/testcafe/example/`;

test('Check Label HTML', async t => {
    let fieldSet = Selector('fieldset').addCustomMethods({
        getLabel: (el, idx) => {
            return el[0].elements[idx].labels[0];
        },
    }, {
        returnDOMNodes: true,
    });

    await t.expect(fieldSet.nth(1).getLabel(3).textContent).eql('Easy embedding into a Continuous integration system');

    fieldSet = fieldSet.addCustomDOMProperties({
        legend: el => el.querySelector('legend').innerText,
    });

    await t.expect(fieldSet.nth(1).legend).eql('Which features are important to you:');
});
