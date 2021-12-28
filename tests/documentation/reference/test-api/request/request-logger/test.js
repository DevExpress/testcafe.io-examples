import { RequestLogger } from 'testcafe';

const logger = RequestLogger();

fixture`RequestLogger`
    .page`https://devexpress.github.io/testcafe/example/`
    .requestHooks(logger);

test('Check request', async t => {
    await t.expect(logger.contains(record => record.response.statusCode === 200)).ok()
        .expect(logger.requests[0].request.method).eql('get');
});
