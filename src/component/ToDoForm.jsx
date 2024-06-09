import TodoItem from "./ToDoItem.jsx";
import { Fragment, useState, useContext } from "react";
import { filterTodos, getTodos } from "../database/todos";
import ToDoContext from "../context/ToDoContext.jsx";
import CreateToDoModal from "./CreateToDoModal";
import EditTodoModal from "./EditToDoModal";
import ConfirmDeleteModal from "./ConfirmDeleteModal";

function TodoForm({ todos }) {
    const { setSelectedTodo, setShowEditModal, setShowDeleteModal } = useContext(ToDoContext);
    const [showCreateModal, setShowCreateModal] = useState(false);

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
                {/*<button*/}
                {/*    className="text-blue-500 hover:text-blue-700"*/}
                {/*    onClick={() => setShowCreateModal(true)}*/}
                {/*>*/}
                {/*    Add Todo*/}
                {/*</button>*/}
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
