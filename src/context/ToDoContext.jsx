import { createContext } from "react";

const ToDoContext = createContext({
    updateTodos: () => {},
});

export default ToDoContext;