import React, { useState, useEffect, useCallback } from "react";

export default useTodo = () => {
  const [inputColor, setInputColor] = useState("red");
  const [text, setText] = useState("빠샤빠샤 화이팅");
  const [todoList, setTodoList] = useState([
    {
      text: "세현아 잘하자",
      color: "red",
    },
  ]);


  const addTodo = (todo) => {
    setTodoList([...todoList, todo])
  };

};
