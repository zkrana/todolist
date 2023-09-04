import React, { useState } from "react";
import "./styles.css";
import TodoChild from "./TodoChild";
import TimePicker from "react-time-picker"; // Import the TimePicker component

const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectedTime, setSelectedTime] = useState("12:00"); // Set an initial time
  const [todolist, setTodoList] = useState([
    {
      id: 1,
      desc: "Breakfast at 6:00 AM",
      time: "6:00 AM" // Initial time value with AM
    }
  ]);

  const formatTime = (time) => {
    const [hours, minutes] = time.split(":");
    const hour = parseInt(hours, 10);
    const minute = parseInt(minutes, 10);
    const ampm = hour >= 12 ? "PM" : "AM";
    const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
    return `${formattedHour}:${minute < 10 ? `0${minute}` : minute} ${ampm}`;
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() === "") {
      return; // Prevent adding empty todos
    }

    const newTodo = {
      id: todolist.length + 1,
      desc: inputValue,
      time: formatTime(selectedTime) // Format the selected time with AM/PM
    };

    setTodoList([...todolist, newTodo]);
    setInputValue("");
    setSelectedTime("12:00"); // Reset the time to the default
  };

  const handleDelete = (id) => {
    const listItems = todolist.filter((item) => item.id !== id);
    setTodoList(listItems);
    localStorage.setItem("shoppingItem", JSON.stringify(listItems));
  };

  return (
    <div className="app">
      <h1> TO DO LIST APP </h1>
      <div className="input-box">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Add a new task"
        />
        <TimePicker
          value={selectedTime}
          onChange={setSelectedTime}
          clearIcon={null} // Remove the clear icon
          disableClock={true} // Disable the clock input
        />
        <span className="add" onClick={handleAddTodo}>
          +
        </span>
      </div>

      <TodoChild todolist={todolist} handleDelete={handleDelete} />
    </div>
  );
};

export default Todo;
