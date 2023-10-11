import { ChangeAlertWithStorageListener } from "../Components/ChangeAlert";
import CreateTodoButton from "../Components/CreateTodoButton/CreateTodoButton";
import Modal from "../Components/Modal/Modal";
import Empty from "../Components/Status-msg/Empty";
import EmptySearch from "../Components/Status-msg/EmptySearch";
import Error from "../Components/Status-msg/Error";
import Loading from "../Components/Status-msg/Loading";
import TodoCounter from "../Components/TodoCounter/TodoCounter";
import TodoForm from "../Components/TodoForm/TodoForm";
import TodoHeader from "../Components/TodoHeader/TodoHeader";
import TodoItem from "../Components/TodoItem/TodoItem";
import TodoList from "../Components/TodoList/TodoList";
import TodoSearch from "../Components/TodoSearch/TodoSearch";
import { useTodo } from "./useTodo";

function App() {
  const {
    synchronizedTodo,
    loading,
    error,
    searchedTodos,
    onComplete,
    onDelete,
    openModal,
    setOpenModal,
    totalTodos = 0,
    completedTodos = 0,
    searchValue,
    setSearchValue,
    addTodo,
  } = useTodo();
  return (
    <>
      <TodoHeader loading={loading}>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchText={searchValue}
        onError={() => <Error />}
        onLoading={() => <Loading />}
        onEmptySearch={(searchText) => <EmptySearch searchText={searchText} />}
        onEmpty={() => <Empty />}
        render={(todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => onComplete(todo.text)}
            onDelete={() => onDelete(todo.text)}
          />
        )}
      />

      <CreateTodoButton onClick={() => setOpenModal(!openModal)} />
      {openModal && (
        <Modal>
          <TodoForm setOpenModal={setOpenModal} addTodo={addTodo} />
        </Modal>
      )}
      <ChangeAlertWithStorageListener synchronized={synchronizedTodo} />
    </>
  );
}

export default App;
