import TodoItem from "./ToDoItem.jsx";
import { Fragment } from "react";
import { filterTodos, getTodos } from "../database/todos";

function TodoForm({ todos }) {
    return (
        <div>
            <div className="flex items-center text-lg max-lg:text-lg justify-between gap-2">
                <h4 className="font-medium leading-relaxed text-dark-gray mb-5">
                    Status ToDo{" "}
                    <span className="text-primary font-semibold">
                        {filterTodos("checked", todos).length}
                        <span className="text-dark-gray">
                            /{getTodos().length}
                        </span>
                    </span>
                </h4>
            </div>

            <ol className="space-y-2 overflow-auto h-[80vh] px-2 pb-5 relative">
                {todos.length > 0 ? (
                    todos.map((todo, id) => {
                        return (
                            <Fragment key={id}>
                                <TodoItem {...{ todo }} />
                            </Fragment>
                        );
                    })
                ) : (
                    <li className="font-bold">
                        Nothing.
                    </li>
                )}
            </ol>
        </div>
    );
}

export default TodoForm;