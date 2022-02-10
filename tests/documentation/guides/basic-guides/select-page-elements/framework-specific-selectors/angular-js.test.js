import { AngularJSSelector } from 'testcafe-angular-selectors';
import { Selector } from 'testcafe';

fixture `Framework-Specific Selectors - AngularJS`
    .page('https://todomvc.com/examples/angularjs/');

test('Add new item', async t => {
    await t
        .typeText(AngularJSSelector.byModel('newTodo'), 'new item')
        .pressKey('enter')
        .expect(Selector('.todo-list').visible).ok();
});
