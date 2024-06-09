import {useState} from "react";
import TodoForm from "./component/ToDoForm";
import {getTodos, updateTodo, addTodo, deleteTodo} from "./database/todos";
import Card from "./component/composable/Card.jsx";
import Footer from "./component/layout/Footer.jsx";
import ToDoContext from "./context/ToDoContext.jsx";
import CustomButton from "./component/composable/CustomButton.jsx";
import CreateToDoModal from "./component/CreateToDoModal";
import EditToDoModal from "./component/EditToDoModal";
import ConfirmDeleteModal from "./component/ConfirmDeleteModal";
import {Button, CloseButton, ComboboxButton, MenuButton} from "@headlessui/react";

function App() {
    const [todos, setTodos] = useState(getTodos());
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedTodo, setSelectedTodo] = useState(null);
    const [filter, setFilter] = useState("all");

    const updateTodos = (id, todo) => {
        setTodos(updateTodo(id, todo, todos));
    };

    const handleAddTodo = (todo) => {
        setTodos(addTodo(todo, todos));
        setShowCreateModal(false);
    };

    const handleEditTodo = (todo) => {
        updateTodos(todo.id, todo);
        setShowEditModal(false);
    };

    const handleDeleteTodo = (id) => {
        setTodos(deleteTodo(id, todos));
        setShowDeleteModal(false);
    };

    return (
        <ToDoContext.Provider value={{updateTodos, setSelectedTodo, setShowEditModal, setShowDeleteModal, setFilter}}>
            <main className="!px-5 pt-5">
                <Card className="w-full mx-auto">
                    <h2 className="text-center font-semibold text-xl tracking-wider uppercase text-dark-gray">
                        Simple Todo with React
                    </h2>
                    <CustomButton className="mb-1" onClick={() => setShowCreateModal(true)}>Add Todo</CustomButton>
                    <div className="flex justify-center gap-4 mt-4">
                        <Button
                            onClick={() => setFilter("all")}
                            className={`px-4 py-2 rounded ${filter === "all" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}
                        >
                            All
                        </Button>
                        <Button
                            onClick={() => setFilter("checked")}
                            className={`px-4 py-2 rounded ${filter === "checked" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}
                        >
                            Checked
                        </Button>
                        <Button
                            onClick={() => setFilter("unchecked")}
                            className={`px-4 py-2 rounded ${filter === "unchecked" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}
                        >
                            Unchecked
                        </Button>
                    </div>
                    <TodoForm {...{todos, filter}} />
                    <Footer/>
                </Card>

                {showCreateModal && (
                    <CreateToDoModal
                        isOpen={showCreateModal}
                        onClose={() => setShowCreateModal(false)}
                        onSave={handleAddTodo}
                    />
                )}

                {showEditModal && selectedTodo && (
                    <EditToDoModal
                        isOpen={showEditModal}
                        onClose={() => setShowEditModal(false)}
                        onSave={handleEditTodo}
                        todo={selectedTodo}
                    />
                )}

                {showDeleteModal && selectedTodo && (
                    <ConfirmDeleteModal
                        isOpen={showDeleteModal}
                        onClose={() => setShowDeleteModal(false)}
                        onConfirm={() => handleDeleteTodo(selectedTodo.id)}
                    />
                )}
            </main>
        </ToDoContext.Provider>
    );
}

export default App;
