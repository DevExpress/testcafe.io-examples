import { Selector } from 'testcafe';

fixture`Parameter as DOM node snapshot`
    .page`https://devexpress.github.io/testcafe/example/`;

test('Click preferred interface', async t => {
    const preferredInterface = await Selector('#preferred-interface');

    // Click will be performed on the element whose snapshot
    // is specified. This is an element with the '#preferred-interface' ID.
    await t.click(preferredInterface);
});
