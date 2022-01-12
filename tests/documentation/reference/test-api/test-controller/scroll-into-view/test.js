import { Selector } from 'testcafe';

fixture`TestController.scrollIntoView`
    .page`https://devexpress.github.io/testcafe/example/`;

test('Scroll element into view', async t => {
    const target = Selector('#submit-button');

    await t.scrollIntoView(target);
});
