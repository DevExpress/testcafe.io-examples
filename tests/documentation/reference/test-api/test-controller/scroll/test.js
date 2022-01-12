import { Selector } from 'testcafe';

fixture`TestController.scroll`
    .page`https://devexpress.github.io/testcafe/example/`;

test('Scroll the container', async t => {
    const container = Selector('#submit-button');

    await t.scroll(container, 'bottomRight');
});
