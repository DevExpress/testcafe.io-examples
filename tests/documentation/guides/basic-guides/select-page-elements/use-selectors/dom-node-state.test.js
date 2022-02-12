import { Selector } from 'testcafe';

fixture`Use selector`
    .page`https://devexpress.github.io/testcafe/example/`;

test('DOM Node State', async t => {
    const sliderHandle = Selector('#slider').child('span');
    const sliderValues = Selector('.slider-values');

    const sliderHandleSnapshot = await sliderHandle();
    const sliderValuesSnapshot = await sliderValues();

    const hasClass          = sliderHandleSnapshot.hasClass('ui-slider-handle'); // => true
    const childElementCount = sliderValuesSnapshot.childElementCount; // => 0

    await t.expect(hasClass).ok();
    await t.expect(childElementCount).gt(0);
});
