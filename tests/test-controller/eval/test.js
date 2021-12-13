fixture`TestController.eval`
    .page`https://devexpress.github.io/testcafe/example/`;

test('Check URL', async t => {
    const docURI = await t.eval(() => document.documentURI);

    await t.expect(docURI).eql('https://devexpress.github.io/testcafe/example/');
});

fixture`TestController.eval`
    .page`https://devexpress.github.io/testcafe/example/`;

const timeout = 1000;

test('Reload right away', async t => {
    const startTime = Date.now();

    await t
        .wait(timeout)
        .eval(() => location.reload(true));
    // The timeout is skipped and the action executes right away.
    // Do not chain eval on to other methods of the test controller
    await t.expect(Date.now() - startTime > timeout).notOk();
});

test('Reload after a timeout', async t => {
    const startTime = Date.now();

    await t.wait(timeout);
    await t.eval(() => location.reload(true));
    // Passes after a timeout
    await t.expect(Date.now() - startTime > timeout).ok();
});
