import { Selector } from 'testcafe';

fixture`TestController.takeElementScreenshot`
    .page`https://devexpress.github.io/testcafe/example/`;

test('Take a screenshot of a fieldset', async t => {
    await t
        .click('#reusing-js-code')
        .click('#continuous-integration-embedding')
        .takeElementScreenshot(Selector('fieldset').nth(1), 'my-fixture/important-features.png');
});

fixture`TestController.takeElementScreenshot`
    .page`https://testcafe.io/`;

test('Take a screenshot of image piece', async t => {
    await t
        .takeElementScreenshot('.main-middle img', {
            includeMargins: true,
            crop:           {
                top:    -100,
                left:   10,
                bottom: 30,
                right:  200,
            },
        });
});
