import { Selector } from 'testcafe';

const elementWithIdOrClassName = Selector(value => {
    return document.getElementById(value) || document.getElementsByClassName(value);
});

fixture `Initialize selector with a promise returned by other selector`
    .page `https://devexpress.github.io/testcafe/example/`;

test('Button with id "#submit-button" exists', async t => {
    // This selector is created from a promise returned by a call to a
    // different selector. The new selector will be initialized with the
    // same function as the old one and with hard-coded parameter values
    // as in the previous example.
    const submitButton = Selector(elementWithIdOrClassName('submit-button'));

    await t.expect(submitButton.exists).ok();
});
