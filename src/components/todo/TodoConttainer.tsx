import { useAppSelector } from "@/redux/hook";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";

const TodoConttainer = () => {
  //   const { todos } = useAppSelector((state) => state.todos);

  const { data: todos, isLoading, isError } = useGetTodosQuery(undefined);
  console.log(todos);
  if (isLoading) {
    return <p>Loading..</p>;
  }

  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal></AddTodoModal>
        <TodoFilter />
      </div>
      <div className="bg-primary-gradient w-full rounded-xl space-y-3 p-[5px] ">
        <div className="bg-white p-5 w-full h-full space-y-3 rounded-md">
          {/* <div className="bg-white text-2xl font-bold p-5 flex justify-center items-center rounded">
            <p>There is no tusk pending</p>
            {""}
          </div> */}
          {todos?.data?.map((item) => (
            <TodoCard {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoConttainer;
