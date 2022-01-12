import { Selector } from 'testcafe';

fixture`Assertion timeout`
    .page('https://devexpress.github.io/testcafe/example/');

test('Should wait for a value of an element in a timeout', async (t) => {
    const startTime    = Date.now();
    const timeoutValue = 500;

    try {
        await t.expect(Selector('h1').innerText).eql('text', 'check element text', { timeout: timeoutValue });
    }
    catch (e) {
        const tookTime = Date.now() - startTime;

        await t.expect(tookTime).gt(timeoutValue);
        await t.expect(tookTime).lt(timeoutValue * 2);
    }
});
