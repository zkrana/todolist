import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const ListItem = ({ todolist, handleDelete, selectedTime }) => {
  return (
    <table>
      {todolist.map((item) => (
        <tr key={item.id}>
          <td>{item.desc}</td>
          <td>{item.time}</td>
          <td>
            <FaTrashAlt
              className="delicon"
              onClick={() => handleDelete(item.id)}
              role="button"
              tabIndex="0"
              aria-label={`Delete ${item.item}`}
            />
          </td>
        </tr>
      ))}
    </table>
  );
};

export default ListItem;
