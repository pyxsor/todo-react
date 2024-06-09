import Checkbox from "./composable/Checkbox.jsx";
import {useContext} from "react";
import {getDate} from "../helper/date";
import ToDoContext from "../context/ToDoContext.jsx";
import {PencilSquareIcon, TrashIcon} from "@heroicons/react/16/solid/index.js";

function ToDoItem({todo}) {
    const {updateTodos, setSelectedTodo, setShowEditModal, setShowDeleteModal} = useContext(ToDoContext);

    return (
        <li className="flex select-none items-center justify-between p-2 rounded-sm bg-light-gray shadow-custom  border border-primary/30 gap-2 ">
            <div className="flex items-center gap-1.5 w-full">
                <Checkbox
                    {...{checked: Boolean(todo.isChecked)}}
                    type="checkbox"
                    id={todo.id}
                    onChange={(event) =>
                        updateTodos(todo.id, {
                            ...todo,
                            isChecked: event.target.checked,
                            completedAt: event.target.checked ? Date.now() : null,
                        })
                    }
                />
                <label
                    htmlFor={todo.id}
                    className={"cursor-pointer flex flex-col w-full"}
                >
                    <span
                        className={
                            Boolean(todo.isChecked)
                                ? "line-through text-primary"
                                : "text-gray-800"
                        }
                    >
                        {todo.text}
                    </span>

                    <span className="font-thin text-xs stroke-none">
                        {getDate(
                            todo.isChecked
                                ? todo.completedAt
                                : todo.createdAt
                        )}
                    </span>
                </label>
            </div>
            <div className="flex gap-2">
                <button
                    title="Edit todo"
                    className="text-blue-500 hover:text-blue-700"
                    onClick={() => {
                        setSelectedTodo(todo);
                        setShowEditModal(true);
                    }}
                >
                        <PencilSquareIcon className="h-5 w-5 border border-gray-400 rounded"/>
                </button>

                <button
                    title="Delete todo"
                    className="text-red-500 hover:text-red-700"
                    onClick={() => {
                        setSelectedTodo(todo);
                        setShowDeleteModal(true);
                    }}
                >
                        <TrashIcon className="h-5 w-5 text-red-500 border border-red-400 rounded"/>
                </button>

            </div>
        </li>
    );
}

export default ToDoItem;
