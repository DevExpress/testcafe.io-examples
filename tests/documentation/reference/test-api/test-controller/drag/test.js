import { Selector } from 'testcafe';

const slider = Selector('#developer-rating');

fixture`TestController.drag`
    .page`https://devexpress.github.io/testcafe/example/`;

test('Drag slider', async t => {
    await t
        .click('#i-tried-testcafe')
        .expect(slider.value).eql(1)
        .drag('.ui-slider-handle', 360, 0, { offsetX: 10, offsetY: 10 })
        .expect(slider.value).eql(7);
});
