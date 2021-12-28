interface RequestObject {
    userAgent: String,
    request: {
        url: String,
        method: String,
        headers: Object,
        body: Buffer | String,
        timestamp: Number
    },
    response: {
        statusCode: Number,
        headers: Object,
        body: Buffer | String,
        timestamp: Number
    }
}

import { RequestLogger } from 'testcafe';

const logger = RequestLogger();

fixture`Request object`
    .page`https://devexpress.github.io/testcafe/example/`
    .requestHooks(logger);

test('Check request', async t => {
    const request: RequestObject = logger.requests[0];
    await t.expect(request.request.method).eql('get');
});
