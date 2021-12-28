fixture.skip`Fixture.skip 1`; // TestCafe skips both tests in this fixture

test('Fixture.skip 1 - Test 1', () => {
    /* ... */
});

test('Fixture.skip 1 - Test 2', () => {
    /* ... */
});

fixture`Fixture.skip 2`;

test('Fixture.skip 2 - Test 1', () => {
    /* ... */
}); // TestCafe runs this test

test.skip('Fixture.skip 2 - Test 2', () => {
    /* ... */
}); // TestCafe skips this test

test('Fixture.skip 2 - Test 3', () => {
    /* ... */
}); // TestCafe runs this test
