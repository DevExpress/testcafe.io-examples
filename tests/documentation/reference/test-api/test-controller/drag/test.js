import { Selector } from 'testcafe';

const slider = Selector('.ui-slider-handle');

fixture.only`TestController.drag`
    .page`https://devexpress.github.io/testcafe/example/`;

test('Drag slider', async t => {
    const sliderValue = await getSliderValue();

    await t
        .expect(sliderValue).eql(1)
        .click('#tried-test-cafe')
        .drag(slider, 360, 0, { offsetX: 10, offsetY: 10 });

    const newSliderValue = await getSliderValue();

    await t.expect(newSliderValue).eql(5);
});

async function getSliderValue () {
    const sliderOffsetLeft = await Selector(slider).offsetLeft;
    const sliderValue      = await Selector('.slider-value')
        .find(node => node.parentElement.offsetLeft === sliderOffsetLeft + 8
            , { sliderOffsetLeft })();

    return +sliderValue.textContent;
}
