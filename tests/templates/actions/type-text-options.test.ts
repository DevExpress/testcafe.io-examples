interface TypeTextOptions {
    modifiers: {
        ctrl: Boolean;
        alt: Boolean;
        shift: Boolean;
        meta: Boolean;
    };

    offsetX: Number;
    offsetY: Number;
    caretPos: Number;
    replace: Boolean;
    paste: Boolean;
    speed: Number;
}

import { Selector } from 'testcafe';

const nameInput = Selector('#developer-name');

fixture`Type text options`
    .page`https://devexpress.github.io/testcafe/example/`;

test('Retype a name', async t => {
    await t
        .typeText(nameInput, 'Peter')
        .typeText(nameInput, 'Parker', { replace: true });
});
