fixture.skip`Test.skip 1`; // TestCafe skips both tests in this fixture

test('Test.skip 1 - Test 1', () => {
    /* ... */
});

test('Test.skip 1 - Test 2', () => {
    /* ... */
});

fixture`Test.skip 2`;

test('Test.skip 2 - Test 1', () => {
    /* ... */
}); // TestCafe runs this test

test.skip('Test.skip 2 - Test 2', () => {
    /* ... */
}); // TestCafe skips this test

test('Test.skip 2 - Test 3', () => {
    /* ... */
}); // TestCafe runs this test
