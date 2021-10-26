import { Selector } from 'testcafe';

interface CustomSelector extends Selector {
    innerHTML: Promise<any>;
}

interface CustomSnapshot extends NodeSnapshot {
    innerHTML: string;
}

fixture `Selector.addCustomDOMProperties with TS`
    .page `https://devexpress.github.io/testcafe/example/`;

test('Check Label HTML', async t => {
    // via selector property
    const label = <CustomSelector>Selector('label').addCustomDOMProperties({
        innerHTML: el => el.innerHTML
    });

    await t.expect(label.innerHTML).contains('input type="checkbox" name="remote"');

    // via element snapshot
    const labelSnapshot = <CustomSnapshot>await label();

    await t.expect(labelSnapshot.innerHTML).contains('input type="checkbox" name="remote"');
});
