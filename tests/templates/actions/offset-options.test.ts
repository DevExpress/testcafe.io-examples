interface OffsetOptions {
    offsetX: Number;
    offsetY: Number;
}

import { Selector } from 'testcafe';

fixture`Offset options`
    .page`https://devexpress.github.io/testcafe/example/`;
test('Scroll element into view', async t => {
    const target = Selector('.main-content');
    await t.scrollIntoView(target);
    // No offset, scrolls until the element's center is visible
    await t.scrollIntoView(target, { offsetX: -1, offsetY: -1 });
    // Scrolls until the bottom right corner of the element is visible
    await t.scrollIntoView(target, { offsetX: 1, offsetY: 1 });
    // Scrolls until the top left corner of the element is visible
});
