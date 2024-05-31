import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [todoList, setTodoList] = useState([
    {
      id: "!23123123",
      text: "잠자기",
      completed: true,
    },
    { id: "223123123", text: "일찍일어나기", completed: false },
  ]);

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();
    if (!value) {
      return alert("입력하세요");
    }
    const newTodo = {
      id: String(Date.now()),
      text: value,
      completed: false,
    };

    setTodoList([newTodo, ...todoList]);
    setValue("");
  };

  const deleteTodo = (selectedId) => {
    const filteredTodoList = todoList.filter((todo) => {
      return selectedId !== todo.id;
    });
    setTodoList(filteredTodoList);
  };

  const updateTodo = (selectedId) => {
    const updatedTodo = todoList.map((todo) => {
      if (selectedId === todo.id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      } else {
        return todo;
      }
    });

    setTodoList(updatedTodo);
  };

  return (
    <div>
      <h1>할 일 목록</h1>
      <form onSubmit={addTodo}>
        <input
          type="text"
          placeholder="할 일을 입력하세요"
          value={value}
          onChange={handleValueChange}
        />
        <button type="submit">추가</button>
      </form>
      <ul>
        {todoList.map((todo) => {
          return (
            <li
              key={todo.id}
              style={{
                textDecoration: todo.completed ? "line-through" : "",
              }}
            >
              {todo.text}
              <button onClick={() => updateTodo(todo.id)}>
                {todo.completed ? "취소" : "완료"}
              </button>
              <button
                onClick={() => {
                  deleteTodo(todo.id);
                }}
              >
                삭제
              </button>
            </li>
          );
        })}
        {/* {[
          <li style={{ textDecoration: "line-through" }}>
            {todoList[0]}
            <button>취소</button>
            <button>삭제</button>
          </li>,
          <li>
            일찍 일어나기
            <button>완료</button>
            <button>삭제</button>
          </li>,
        ]} */}
      </ul>
    </div>
  );
}

export default App;
