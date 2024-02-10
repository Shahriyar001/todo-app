import TodoCard from "@/components/todo/TodoCard";
import TodoConttainer from "@/components/todo/TodoConttainer";
import Container from "@/components/ui/COntainer";

const Todo = () => {
  return (
    <Container>
      <h1 className="text-center my-10 test-3xl font-semibold">My todos</h1>
      <TodoConttainer></TodoConttainer>
    </Container>
  );
};

export default Todo;
