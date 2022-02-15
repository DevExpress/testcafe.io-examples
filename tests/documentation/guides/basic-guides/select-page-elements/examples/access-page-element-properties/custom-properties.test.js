import { Selector } from 'testcafe';

fixture`Access Page Element Properties`
    .page`https://devexpress.github.io/testcafe/example/`;

test('Check Label HTML', async t => {
    const label = Selector('label').addCustomDOMProperties({
        innerHTML: el => el.innerHTML,
        tabIndex:  el => el.tabIndex,
        localName: el => el.localName,
    });

    await t
        .expect(label.innerHTML).contains('type="checkbox"')
        .expect(label.tabIndex).eql(-1)
        .expect(label.localName).eql('label');
});
