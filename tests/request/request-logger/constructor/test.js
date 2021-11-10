import { RequestLogger } from 'testcafe';

const simpleLogger = RequestLogger('https://devexpress.github.io/testcafe/example/');
const headerLogger = RequestLogger(/testcafe/, {
    logRequestHeaders:  true,
    logResponseHeaders: true,
});

fixture`RequestLogger.constructor`
    .page`https://devexpress.github.io/testcafe/example/`;

test.requestHooks(simpleLogger)('Check simple logger', async t => {
    await t.expect(simpleLogger.requests.length).eql(1);
});

test.requestHooks(headerLogger)('Check header logger', async t => {
    await t.expect(headerLogger.requests.length).eql(6);
});
