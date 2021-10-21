import { Selector } from 'testcafe';

// A selector is created from a regular function.
// This selector will take an element by id that is saved in the localStorage.
const element = Selector(() => {
    const storedElementId = window.localStorage.storedElementId;

    return document.getElementById(storedElementId);
});

fixture `Initialize selector with function on client side without param`
    .page `https://devexpress.github.io/testcafe/example/`
    .clientScripts({ content: 'window.localStorage.setItem("storedElementId", "submit-button")' });

test('Button with id "#submit-button" exists', async (t) => {
    await t.expect(element.exists).ok();
});
