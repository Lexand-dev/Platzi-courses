import { useState } from "react";
import { useLocalStorage } from "../Hooks/useLocalStorage";

function useTodo() {
  const defaultTodos = [
    { text: "Estudiar programación", completed: true },
    { text: "Tomar las clases de React", completed: false },
    { text: "Hacer ejercicios", completed: false },
    { text: "Tomar un descanso", completed: false },
  ];

  const {
    item: todos,
    saveItem: saveTodos,
    synchronized: synchronizedTodo,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", defaultTodos);

  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      text,
      completed: false,
    });
    saveTodos(newTodos);
  };
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();

    return todoText.includes(searchText);
  });

  const onComplete = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const onDelete = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
  return {
    synchronizedTodo,
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    onComplete,
    onDelete,
    openModal,
    setOpenModal,
    addTodo,
  };
}

export { useTodo };
