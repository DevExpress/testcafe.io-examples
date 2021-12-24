import { Selector } from 'testcafe';

fixture`TestController.typeText`
    .page`./pages/index.html`;

const color    = Selector('input[type=color]');
const datetime = Selector('input[type=datetime-local]');
const range    = Selector('input[type=range]');

test('Interact with inputs', async t => {

    await t
        .typeText(color, '#FF8040')
        .typeText(datetime, '2017-11-03T05:00')
        .typeText(range, '80');
});
