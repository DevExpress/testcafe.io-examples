interface MouseOptions {
    modifiers: {
        ctrl: Boolean;
        alt: Boolean;
        shift: Boolean;
        meta: Boolean;
    };

    offsetX: Number;
    offsetY: Number;
    speed: Number;
}

import { Selector } from 'testcafe';

const sliderHandle = Selector('.ui-slider-handle');

fixture`Mouse options`
    .page`https://devexpress.github.io/testcafe/example/`;

test('Set an estimate', async t => {
    await t
        .click('#tried-test-cafe')
        .drag(sliderHandle, 360, 0, {
            offsetX:   10,
            offsetY:   10,
            modifiers: {
                shift: true
            }
        });
});
