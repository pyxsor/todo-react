import TodoItem from "./ToDoItem.jsx";
import {Fragment, useState} from "react";
import {filterTodos, getTodos} from "../database/todos";
import CreateToDoModal from "./CreateToDoModal";

function TodoForm({todos, filter, searchText}) {
    const [showCreateModal, setShowCreateModal] = useState(false);
    let filteredTodos = filter === "all" ? todos : filterTodos(filter, todos);

    if (searchText) {
        filteredTodos = filteredTodos.filter(todo =>
            todo.text.toLowerCase().includes(searchText.toLowerCase())
        );
    }

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
                {filteredTodos.length > 0 ? (
                    filteredTodos.map((todo, id) => {
                        return (
                            <Fragment key={id}>
                                <TodoItem {...{todo}} />
                            </Fragment>
                        );
                    })
                ) : (
                    <li className="font-bold">
                        Nothing.
                    </li>
                )}
            </ol>

            {showCreateModal && (
                <CreateToDoModal
                    isOpen={showCreateModal}
                    onClose={() => setShowCreateModal(false)}
                    onSave={(newTodo) => {
                        setShowCreateModal(false);
                        setTodos((prevTodos) => [...prevTodos, newTodo]);
                    }}
                />
            )}
        </div>
    );
}

export default TodoForm;
