import TodoItem from "./TodoItem";

const TodoList = ({ todos, onComplete, onRemove }) => {
  return (
    <table className="w-full border-collapse border">
      <thead>
        <tr className="bg-gray-200">
          <th className="border p-2">Task</th>
          <th className="border p-2">Status</th>
          <th className="border p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {todos.length > 0 ? (
          todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} onComplete={onComplete} onRemove={onRemove} />
          ))
        ) : (
          <tr>
            <td colSpan="3" className="text-center p-4 text-gray-500">No tasks available</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default TodoList;
