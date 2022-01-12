fixture`Allow unawaited promise`;

test('Promise should be returned', async (t) => {
    await t.expect(new Promise(resolve => setTimeout(resolve, 100))).ok('check that a promise is returned', { allowUnawaitedPromise: true });
});
