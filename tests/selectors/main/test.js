import { Selector } from 'testcafe';

const main = Selector('.main-content');

fixture `Selector`
    .page `https://devexpress.github.io/testcafe/example/`;

test('Main content exists', async (t) => {
    await t.expect(main.exists).ok();
});
