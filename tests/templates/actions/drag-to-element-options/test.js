import { Selector } from 'testcafe';

const sliderHandle = Selector('#slider').child();
const rateValue    = Selector('.slider-value').nth(9);

fixture`Drag to element options`
    .page`https://devexpress.github.io/testcafe/example/`;

test('Set an estimate', async t => {
    await t
        .click('#tried-test-cafe')
        .dragToElement(sliderHandle, rateValue, {
            offsetX:            10,
            offsetY:            10,
            destinationOffsetX: 0,
            destinationOffsetY: -25,
            speed:              0.1,
        });
});
