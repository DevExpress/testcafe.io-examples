import { Selector } from 'testcafe';

fixture`Selector.shadowRoot`
    .page`https://devexpress.github.io/testcafe/example/`;

test('Get text within shadow tree', async t => {
    const shadowRoot = Selector('div').withAttribute('id', 'shadow-host').shadowRoot();
    const paragraph  = shadowRoot.child('p');

    await t.expect(paragraph.textContent).eql('This paragraph is in the shadow tree');

    try {
        await t.click(shadowRoot);
        // causes an error
        // do not target the shadow root directly or use it in assertions
    }
    catch (error) {
        await t.expect(error.code).eql('E27');
    }
});
