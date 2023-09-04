import React from "react";
import ListItem from "./ListItem";

const TodoChild = ({ todolist, handleDelete, selectedTime }) => {
  console.log("todolist length:", todolist.length); // Add this line to check the length

  return (
    <div>
      {todolist.length ? (
        <ListItem
          todolist={todolist}
          handleDelete={handleDelete}
          selectedTime={selectedTime}
        />
      ) : (
        <p
          style={{
            backgroundColor: "rgb(229, 219, 255)",
            padding: "15px",
            fontSize: "20px"
          }}
        >
          There is no Item Left.
        </p>
      )}
    </div>
  );
};

export default TodoChild;
