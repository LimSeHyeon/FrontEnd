import React, { createContext, useState } from "react";
import {v4 as uuidv4 } from "v4";
import { TodoStore } from "../../lib/utils";

export const todoContext = createContext();

export default function TodoProvider({children}) {

  //TodoList 기능 정의
  const [todoList, setTodoList] = useState([]);

  // addTodo
  const addTodo = useCallback(
    (text, color) => {
      const todos = [...todoList, { id: uuidv4(), text, color }];
      setTodoList(todos);
      TodoStore.setTodo(todos);
    },
    [todoList],
  );
  const removeTodo = useCallback(
    (todoId) => {
      const newTodoList = todoList.filter((todo, idx) => todoId !== todo.id);
      setTodoList(newTodoList);
      TodoStore.setTodo(newTodoList);
    },
    [todoList],
  );
  const editTodo = useCallback(
    (todoId, text) => {
      const newTodoList = todoList.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            text,
          };
        }
        return todo;
      });
      setTodoList(newTodoList);
      TodoStore.setTodo(newTodoList);
    },
    [todoList],
  );


  return <todoContext.Provider value={todo}>{children}</todoContext.Provider>;
}

