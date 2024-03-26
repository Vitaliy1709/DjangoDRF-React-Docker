import React from "react";
import ListItem from "./ListItem";
import "./styles/style.css"

const List = ({ items, onEdit, onDelete }) => {
  const sortedItems = items.slice().sort((a, b) => a.username?.localeCompare(b.username) || a.name?.localeCompare(b.name));

  return (
    <div className="list">
      <h1 className="title">{items[0]?.username ? "User" : "Group"} List</h1>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>{items[0]?.username ? "Group" : "Description"}</th>
            {items[0]?.username && <th>Create</th>}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {!sortedItems || sortedItems.length === 0 ? (
            <tr>
              <td colSpan={items[0]?.username ? "5" : "4"} align="center">
                <h1 className="title">Пока ничего нет.</h1>
              </td>
            </tr>
          ) : (
            sortedItems.map((item, index) => (
              <ListItem
                key={item.id}
                item={item}
                index={index}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default List;
