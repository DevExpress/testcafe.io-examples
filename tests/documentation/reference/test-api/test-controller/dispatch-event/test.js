import { Selector } from 'testcafe';

fixture`TestController.dispatchEvent`
    .page('./index.html');

test('Dispatch a TouchEvent', async t => {
    const target = Selector('#target');

    const eventArgs = {
        cancelable: false,
        bubbles:    false,
    };

    const options = Object.assign(
        { eventConstructor: 'TouchEvent' },
        eventArgs,
    );

    await t
        .dispatchEvent(target, 'touchstart', options);
});
