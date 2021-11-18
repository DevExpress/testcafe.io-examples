/* eslint-disable max-nested-callbacks,no-unused-vars */
import { ClientFunction, RequestMock, Selector } from 'testcafe';

const https = require('https');

const promisifiedHttpsGet = async (url) => {
    const data = {};
    let promiseResolve;

    const promise = new Promise((resolve) => {
        promiseResolve = resolve;
    });

    https.get('https://jsonplaceholder.typicode.com/todos/1', (res) => {
        let body = '';

        res.on('data', (chunk) => {
            body += chunk;
        });

        res.on('end', () => {
            try {
                data.body = JSON.parse(body);
            }
            catch (e) {
                console.error(e);
            }
            promiseResolve();
        });
    }).on('error', (e) => {
        console.error(e);
    });

    await promise;

    return data;
};

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
        const data = await promisifiedHttpsGet('https://jsonplaceholder.typicode.com/todos/1');

        res.headers['access-control-allow-origin'] = '*';
        res.setBody(data.body);
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
