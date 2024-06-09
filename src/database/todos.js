const generateCreatedAt = () => Date.now() + Math.random();

const sortingDefault = (a, b) =>
    a.isChecked - b.isChecked || b.createdAt - a.createdAt;

const defaultTodos = [
    { id: 1, text: "Beli Susu", isChecked: 0, createdAt: generateCreatedAt() },
    { id: 2, text: "Mandikan Burung", isChecked: 0, createdAt: generateCreatedAt() },
    { id: 3, text: "Mandikan Diri Sendiri", isChecked: 0, createdAt: generateCreatedAt() },
    { id: 4, text: "Olahraga", isChecked: 0, createdAt: generateCreatedAt() },
    { id: 5, text: "Tidur", isChecked: 0, createdAt: generateCreatedAt() },
];

const getTodos = () => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos).sort(sortingDefault) : defaultTodos.sort(sortingDefault);
};

const setTodos = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos));
};

const updateTodo = (id, updatedTodo, todos) => {
    const newTodos = todos.map(todo => todo.id === id ? updatedTodo : todo);
    setTodos(newTodos);
    return newTodos.sort(sortingDefault);
};

const addTodo = (todo, todos) => {
    const updatedTodos = [...todos, todo];
    setTodos(updatedTodos);
    return updatedTodos.sort(sortingDefault);
};

const deleteTodo = (id, todos) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
    return updatedTodos.sort(sortingDefault);
};

const editTodo = (id, updatedTodo, todos) => {
    const newTodos = todos.map(todo => todo.id === id ? { ...todo, ...updatedTodo } : todo);
    setTodos(newTodos);
    return newTodos.sort(sortingDefault);
};

const filterTodos = (filter, todos) => {
    if (!todos) return [];
    let newTodos;

    switch (filter) {
        case "checked":
            newTodos = todos.filter(todo => Boolean(todo.isChecked) === true);
            break;
        case "unchecked":
            newTodos = todos.filter(todo => Boolean(todo.isChecked) === false);
            break;
        default:
            newTodos = todos;
            break;
    }
    return newTodos.sort(sortingDefault);
};

export { getTodos, updateTodo, filterTodos, addTodo, deleteTodo, editTodo };
