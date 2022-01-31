import { Selector } from 'testcafe';

fixture`Use selector`
    .page`https://devexpress.github.io/testcafe/example/`;

test('Assertion with Selector', async t => {
    const developerNameInput = Selector('#developer-name');

    await t
        .expect(developerNameInput.value).eql('')
        .typeText(developerNameInput, 'Peter')
        .expect(developerNameInput.value).eql('Peter');
});
