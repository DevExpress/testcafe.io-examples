import { Selector } from 'testcafe';

fixture`TestController.hover`
    .page`./index.html`;

test('Should show hint on hover', async t => {
    await t
        .hover('.button')
        .expect(Selector('.hint').visible).ok();
});
