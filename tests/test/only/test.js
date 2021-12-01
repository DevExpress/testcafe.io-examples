fixture.only`Test.only 1`; // TestCafe runs both tests in this fixture

test('Test.only 1 - Test 1', () => {
    /* ... */
});

test('Test.only 1 - Test 2', () => {
    /* ... */
});

fixture`Test.only 2`;

test('Test.only 2 - Test 1', () => {
    /* ... */
}); // TestCafe skips this test

test.only('Test.only 2 - Test 2', () => {
    /* ... */
}); // TestCafe runs this test

test('Test.only 2 - Test 3', () => {
    /* ... */
}); // TestCafe skips this test
