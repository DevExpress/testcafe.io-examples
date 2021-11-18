/* eslint-disable max-nested-callbacks,no-unused-vars */
import { ClientFunction, RequestMock, Selector } from 'testcafe';

const https = require('https');

const templateMock = RequestMock()
    .onRequestTo(/\*...\*/)
    .respond((req, res) => {
        // ...
    });

const mock = RequestMock()
    .onRequestTo('https://devexpress.github.io/testcafe/example/page')
    .respond((req, res) => {
        res.setBody('<html><body><h1>This is a page</h1></body></html>');
    })
    .onRequestTo('https://devexpress.github.io/testcafe/example/todo')
    .respond(async (req, res) => {
        let body = {};
        let promiseResolve;

        const promise = new Promise((resolve) => {
            promiseResolve = resolve;
        });

        https.get('https://jsonplaceholder.typicode.com/todos/1', (resTodo) => {
            resTodo.on('data', (d) => {
                body = JSON.parse(d.toString());
                promiseResolve();
            });

        }).on('error', (e) => {
            console.error(e);
        });

        await promise;

        res.headers['access-control-allow-origin'] = '*';
        res.setBody(body);
    });


fixture`Custom requestMock.onRequestTo.respond`
    .requestHooks(mock);

test('Should mock requests', async t => {
    const jsonData = await ClientFunction(() => fetch('https://devexpress.github.io/testcafe/example/todo').then(res => res.json()))();

    await t
        .expect(jsonData).eql({
            userId:    1,
            id:        1,
            title:     'delectus aut autem',
            completed: false,
        });
});
