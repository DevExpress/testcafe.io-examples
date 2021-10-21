import { Selector } from 'testcafe';

const developerNameInput = Selector('#developer-name');

fixture `Selector constructor`
    .page `https://devexpress.github.io/testcafe/example/`;

test('Input with id "#developer-name" exists', async (t) => {
    await t.expect(developerNameInput.exists).ok();
});
