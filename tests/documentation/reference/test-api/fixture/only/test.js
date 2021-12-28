fixture.only`Fixture.only 1`; // TestCafe runs both tests in this fixture

test('Fixture.only 1 - Test 1', () => {
    /* ... */
});

test('Fixture.only 1 - Test 2', () => {
    /* ... */
});

fixture`Fixture.only 2`;

test('Fixture.only 2 - Test 1', () => {
    /* ... */
}); // TestCafe skips this test

test.only('Fixture.only 2 - Test 2', () => {
    /* ... */
}); // TestCafe runs this test

test('Fixture.only 2 - Test 3', () => {
    /* ... */
}); // TestCafe skips this test
