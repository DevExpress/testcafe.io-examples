import { Selector } from 'testcafe';

fixture`Assertion Structure`
    .page`https://devexpress.github.io/testcafe/example/`;

test('Check property of element', async t => {
    const developerNameInput = Selector('#developer-name');

    await t
        .expect(developerNameInput.value).eql('', 'input is empty')
        .typeText(developerNameInput, 'Peter Parker')
        .expect(developerNameInput.value).contains('Peter', 'input contains text "Peter"');
});

fixture`Smart Assertion Query Mechanism`
    .page`./pages/index.html`;

test('Button click', async t => {
    const btn = Selector('#btn');

    await t
        .click(btn)
        // A regular assertion fails immediately, but TestCafe retries to run DOM state
        // assertions many times within the timeout until this assertion passes successfully.
        // The default timeout is 3000 ms.
        .expect(btn.textContent).contains('Loading...');
});

fixture`Smart Assertion Limitations`
    .page`./pages/index.html`;

test('Button click', async t => {
    const btn = Selector('#btn');

    try {
        await t
            .click(btn)
            .expect(await btn.textContent).contains('Loading...'); //fails because the selector value does not update according to page behavior
    }
    catch (e) {
        await t.expect(e.errMsg).contains('expected \'Click me!\' to include \'Loading...\'');
    }

    try {
        await t
            .click(btn)
            .expect(btn()).contains({ innerText: 'Loading...' }); //fails because the selector value does not update according to page behavior
    }
    catch (e) {
        await t.expect(e.errMsg).contains('expected \'Click me!\' to include \'Loading...\'');
        console.log(e);
    }

    await t
        .click(btn)
        .expect(btn.innerText).eql('Loading...'); //passes because the promise returned from the selector eventually updates
});
