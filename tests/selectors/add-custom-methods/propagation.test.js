import { Selector } from 'testcafe';

fixture`Selector.addCustomMethods propagation`
    .page`https://devexpress.github.io/testcafe/example/`;

test('Propagate custom properties', async t => {
    const fieldSet = Selector('fieldset').addCustomMethods({
        getInput: (el, idx) => {
            return el[0].querySelectorAll('input')[idx];
        },
    }, {
        returnDOMNodes: true,
    });

    await t
        .typeText(fieldSet.getInput(0), 'Peter Parker')
        .click(fieldSet.withText('Operating System').getInput(2))
        .click(fieldSet.withAttribute('id', 'tried-section').getInput(0));
});
