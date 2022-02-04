import { useState } from 'react';

const TodoList = ({items}) => {
    return (
        <ul>
            {items.map(item => (
                <li key={item.id}>{item.text}</li>
            ))}
        </ul>
    );
}

const TodoApp = () => {
    const [items, setItems] = useState([]);
    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.length === 0) {
            return;
        }
        const newItem = {
            text: text,
            id: Date.now()
        };

        setText('');
        setItems((prevState => prevState.concat(newItem)));
    }

    return (
        <div>
            <h3>TODO</h3>
            <TodoList items={items} />
            <form onSubmit={handleSubmit}>
                <label htmlFor="new-todo">
                    What needs to be done?
                </label>
                <input
                    id="new-todo"
                    onChange={handleChange}
                    value={text}
                />
                <button>
                    Add #{items.length + 1}
                </button>
            </form>
        </div>
    )
}

export default TodoApp;
