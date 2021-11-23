import { ClientFunction, Selector } from 'testcafe';

const option = Selector('option');

const secondOption = option.nth(1);

const getSecondOptionHTML = ClientFunction(() => option().innerHTML, {
    dependencies: { option: secondOption },
});

const thirdOption = option.nth(2);

const getThirdOptionHTML = getSecondOptionHTML.with({
    dependencies: { option: thirdOption },
});

fixture`ClientFunction.with`
    .page`https://devexpress.github.io/testcafe/example/`;

test('Check third option', async t => {
    console.log(await getSecondOptionHTML());

    await t.expect(getThirdOptionHTML()).eql('Both');
});
