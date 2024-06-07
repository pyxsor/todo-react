import { useState } from "react";
import TodoForm from "./component/ToDoForm";
import { getTodos, updateTodo } from "./database/todos";
import Card from "./component/composable/Card.jsx";
import Footer from "./component/layout/Footer.jsx";
import ToDoContext from "./context/ToDoContext.jsx";

function App() {
    const [todos, setTodos] = useState(getTodos());

    const updateTodos = (id, todo) => {
        setTodos(updateTodo(id, todo, todos));
    };

    return (
        <ToDoContext.Provider value={{ updateTodos }}>
            <main className="!px-5 pt-5">
                <Card className="w-full mx-auto">
                    <h2 className="text-center font-semibold text-xl tracking-wider uppercase text-dark-gray">
                        Simple Todo with React
                    </h2>
                    <TodoForm
                        {...{
                            todos,
                        }}
                    />
                    <Footer />
                </Card>
            </main>
        </ToDoContext.Provider>
    );
}

export default App;