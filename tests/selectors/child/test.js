import { Selector } from 'testcafe';

fixture`Selector.child`
    .page`https://devexpress.github.io/testcafe/example/`;

test('Check count of the elements children', async (t) => {
    // Selects all children of all fieldset elements.
    const fieldsetChildren = Selector('fieldset').child();

    // Selects all closest children of all div elements.
    const divClosestChildren = Selector('div').child(0);

    // Selects all furthest children of all .column elements.
    const columnFurthestChildren = Selector('.column').child(-1);

    // Selects all p elements that are children of a fieldset element.
    const fieldsetPChildren = Selector('fieldset').child('p');

    await t.expect(fieldsetChildren.count).eql(20);
    await t.expect(divClosestChildren.count).eql(8);
    await t.expect(columnFurthestChildren.count).eql(2);
    await t.expect(fieldsetPChildren.count).eql(8);
});
