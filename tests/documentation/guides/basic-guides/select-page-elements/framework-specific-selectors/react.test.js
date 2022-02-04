import { ReactSelector } from 'testcafe-react-selectors';

const TodoApp    = ReactSelector('TodoApp');
const TodoList   = ReactSelector('TodoApp TodoList');
const itemsCount = ReactSelector('TodoApp div span');

fixture`Framework-Specific Selectors - React`
    .page('http://localhost:3001/');

test
    .before(async (t) => {
        const newTodo       = TodoApp.find('#new-todo');
        const submitNewTodo = TodoApp.find('#submit');

        await t
            .typeText(newTodo, 'New todo')
            .click(submitNewTodo)
            .expect(itemsCount.textContent).eql('1');
    })('Check component state', async (t) => {
        const TodoItem      = TodoList.findReact('TodoItem');
        const todoItemState = await TodoItem.getReact();

        await t.expect(todoItemState).eql({
            state: {},
            props: {
                text: 'New todo',
            },
            key: '1',
        });

        // >> reactComponentState
        //
        // {
        //     props:    <component_props>,
        //     state:    <component_state>,
        //     key:      <component_key>
        // }
    });
