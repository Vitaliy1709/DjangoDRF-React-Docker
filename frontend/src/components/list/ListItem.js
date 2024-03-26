import React from "react";
import { formatDate } from "../utils/utils";

const ListItem = ({ item, index, onEdit, onDelete }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{item.username || item.name || ""}</td>
      <td>{item.group_name || item.description || ""}</td>

      {item.created && <td>{formatDate(item.created)}</td>}
      <td>
        <button className="btn-btn" type="button" onClick={() => onEdit(item)}>Edit</button>
        <button className="btn-btn" type="button" onClick={() => onDelete(item)}>Delete</button>
      </td>
    </tr>
  );
};

export default ListItem;
