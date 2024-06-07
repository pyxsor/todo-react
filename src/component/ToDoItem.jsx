import Checkbox from "./composable/Checkbox.jsx";
import { useContext } from "react";
import { getDate } from "../helper/date";
import ToDoContext from "../context/ToDoContext.jsx";

function TodoItem({ todo }) {
    const { updateTodos} = useContext(ToDoContext);

    return (
        <li className="flex select-none items-center justify-between p-2 rounded-sm bg-light-gray shadow-custom  border border-primary/30 gap-2 ">
            <div className="flex items-center gap-1.5 w-full">
                <Checkbox
                    {...{ checked: Boolean(todo.isChecked) }}
                    type="checkbox"
                    id={todo.id}
                    onChange={(event) =>
                        updateTodos(todo.id, {
                            ...todo,
                            isChecked: event.target.checked,
                            completedAt: event.target.checked && Date.now(),
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

                    {
                        <span className="font-thin text-xs stroke-none">
                            {getDate(
                                todo.isChecked
                                    ? todo.completedAt
                                    : todo.createdAt
                            )}
                        </span>
                    }
                </label>
            </div>
        </li>
    );
}

export default TodoItem;