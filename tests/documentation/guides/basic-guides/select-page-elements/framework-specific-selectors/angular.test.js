import { ANGULAR_PORT } from '../../../../../utils/constants';
import { AngularSelector } from 'testcafe-angular-selectors';

const rootAngular       = AngularSelector();
const todoComponent     = AngularSelector('todo');
const listItemComponent = AngularSelector('todo todo-item');

fixture`Framework-Specific Selectors - Angular`
    .page(`http://localhost:${ANGULAR_PORT}/`);

test
    .before(async (t) => {
        const newTodo       = rootAngular.find('#addItemInput');
        const submitNewTodo = rootAngular.find('#submit');

        await t
            .typeText(newTodo, 'New todo')
            .click(submitNewTodo)
            .expect(listItemComponent.count).eql(1);

        const todoAngular = await todoComponent.getAngular();

        await t.expect(todoAngular.allItems.length).eql(1);
    })('Check component state', async (t) => {
        const todo        = AngularSelector('todo');
        const todoAngular = await todo.getAngular();

        await t.expect(todoAngular.allItems.length).eql(1);
    });
