import https from 'https';
import { Selector } from 'testcafe';

fixture`Call Selectors from Node.js Callbacks`
    .page`https://devexpress.github.io/testcafe/example/`;

const elementWithId = Selector(id => document.getElementById(id));

test('Title changed', async t => {
    const boundSelector = elementWithId.with({ boundTestRun: t });

    // Performs an HTTP request that gets the page.
    // Checks the getting title
    const match = await new Promise(resolve => {

        const req = https.request('https://devexpress.github.io/testcafe/example/', res => {
            let body = '';

            res.on('data', (d) => {
                body += d;
            });

            res.on('end', async () => {
                const titleEl = await boundSelector('developer-name');

                resolve(new RegExp(titleEl.textContent).test(body));
            });
        });

        req.end();
    });

    await t.expect(match).ok();
});
