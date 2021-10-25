import { Selector } from 'testcafe';

fixture `Initialize selector with option "visibilityCheck"`
    .page `https://devexpress.github.io/testcafe/example/`;

test('Check form bottom width', async (t) => {
    const width = await Selector('.form-bottom', { visibilityCheck: true }).clientWidth;

    await t.expect(width).ok();

    await t.expect(Selector('.form-bottom', { visibilityCheck: true }).clientWidth).eql(850);
});

test('Snapshot of the ".form-bottom" is ok', async (t) => {
    const snapshot = await Selector('.form-bottom', { visibilityCheck: true })();

    await t.expect(snapshot).ok();
});

test.page('./index.html')('Should count hidden elements', async (t) => {
    const count = await Selector('div', { visibilityCheck: true }).count;

    // returns 3 since the visibilityCheck option
    // does not affect the selector's matched set

    await t.expect(count).eql(3);
});
