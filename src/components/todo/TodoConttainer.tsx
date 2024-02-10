import TodoCard from "./TodoCard";

const TodoConttainer = () => {
  return (
    <div>
      <div>
        <button>Add Todo</button>
        <button>Filter</button>
      </div>
      <div className="bg-red-500 w-full rounded-xl p-5 space-y-3 ">
        <div className="bg-white text-2xl font-bold p-5 flex justify-center items-center rounded">
          <p>There is no tusk pending</p>
          {""}
        </div>
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
      </div>
    </div>
  );
};

export default TodoConttainer;
