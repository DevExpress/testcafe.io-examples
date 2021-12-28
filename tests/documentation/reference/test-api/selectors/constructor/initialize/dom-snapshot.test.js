import { Selector } from 'testcafe';

fixture`Initialize selector with DOM Node Snapshot`
    .page`https://devexpress.github.io/testcafe/example/`;

test('Visible select with id "#preferred-interface" exists', async t => {
    const preferredInterfaceMenuSnapshot = await Selector('#preferred-interface')();

    // This selector is created from a DOM Node state object returned
    // by a different selector. The new selector will use the same initializer
    // as 'elementWithId' and will always be executed with the same parameter
    // values that were used to obtain 'topMenuSnapshot'. You can still
    // overwrite the selector options.
    const visiblePreferredInterfaceMenuSnapshot = Selector(preferredInterfaceMenuSnapshot, {
        visibilityCheck: true,
    });

    await t.expect(visiblePreferredInterfaceMenuSnapshot.exists).ok();
});
