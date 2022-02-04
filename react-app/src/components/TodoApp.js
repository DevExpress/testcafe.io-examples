import { useState } from 'react';

const TodoItem = ({ text }) => {
    return (
        <li>{text}</li>
    );
};

const TodoList = ({ items }) => {
    return (
        <ul>
            {items.map(item => (
                <TodoItem key={item.id} text={item.text}/>
            ))}
        </ul>
    );
};

const TodoApp = () => {
    const [items, setItems] = useState([]);
    const [text, setText]   = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.length === 0) {
            return;
        }
        const newItem = {
            text: text,
            id:   items.length + 1
        };

        setText('');
        setItems((prevState => prevState.concat(newItem)));
    };

    return (
        <div>
            <h3>TODO</h3>
            <TodoList items={items}/>
            <form onSubmit={handleSubmit}>
                <label htmlFor="new-todo">
                    What needs to be done?
                </label>
                <input
                    id="new-todo"
                    onChange={handleChange}
                    value={text}
                />
                <button id="submit">
                    Add
                </button>
            </form>
            <span>{items.length}</span>
        </div>
    );
};

export default TodoApp;
