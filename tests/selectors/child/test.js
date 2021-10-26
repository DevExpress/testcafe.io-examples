import { Selector } from 'testcafe';

fixture`Selector.child`
    .page`https://devexpress.github.io/testcafe/example/`;

test('Check count of the elements children', async (t) => {
    // Selects all children of all fieldset elements.
    const fieldsetChildren = Selector('fieldset').child();

    await t.expect(fieldsetChildren.count).eql(20);

    // Selects all closest children of all div elements.
    const divClosestChildren = Selector('div').child(0);

    await t.expect(divClosestChildren.count).eql(8);

    // Selects all furthest children of all .column elements.
    const columnFurthestChildren = Selector('.column').child(-1);

    await t.expect(columnFurthestChildren.count).eql(2);

    // Selects all p elements that are children of a fieldset element.
    const fieldsetPChildren = Selector('fieldset').child('p');

    await t.expect(fieldsetPChildren.count).eql(8);
});
