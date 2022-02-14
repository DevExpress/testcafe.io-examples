import { Selector, ClientFunction } from 'testcafe';

fixture`Access Page Element Properties`
    .page`https://devexpress.github.io/testcafe/example/`;

test('Check Label HTML via client function', async t => {
    const label = Selector('label');

    const getLabelHtml = ClientFunction(() => label().innerHTML, { dependencies: { label } });

    await t
        .expect(getLabelHtml()).contains('type="checkbox"')
        .expect(getLabelHtml()).contains('name="remote"');
});
