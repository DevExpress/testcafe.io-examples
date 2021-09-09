(async () => {
    const createTestCafe = require('testcafe');

    const options = {
        hostname: 'localhost',
        port1:    1337,
        port2:    1338,
    };

    const testcafe = await createTestCafe(options);

    await testcafe
        .createRunner()
        .src('test.js')
        .browsers('chrome')
        .run();

    await testcafe.close();
})();
