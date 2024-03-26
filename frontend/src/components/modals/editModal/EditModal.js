import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { editUser, editGroup, fetchGroups } from "../../api/api";
import GroupSelect from "../groupSelect/GroupSelect";
import "../styles/styles.css";

const EditModal = ({ item, isUserList, onSubmit, onClose }) => {
  const [name, setName] = useState(item.name || "");
  const [description, setDescription] = useState(item.description || "");
  const [group, setGroup] = useState(item.group || "");
  const [groups, setGroups] = useState([]);
  const [username, setUsername] = useState(item.username || "");


  useEffect(() => {
    const fetchData = async () => {
      try {
        const groupsData = await fetchGroups();
        setGroups(groupsData);
      } catch (error) {
        console.error("Error fetching groups:", error);
      }
    };

    fetchData();
  }, []);


  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedItem = { ...item, name, username, description, group };
    const editFunction = isUserList ? editUser : editGroup;

    try {
      const response = await editFunction(updatedItem.id, updatedItem);
      console.log(`${isUserList ? "User" : "Group"} updated:`, response);
      onSubmit(response);
      onClose();
    } catch (error) {
      alert(`Error updating ${isUserList ? "user" : "group"}:`);
    }
  };

  return (
    <div className="modal">
      <h2>Edit {isUserList ? "User" : "Group"}</h2>
      <form onSubmit={handleSubmit}>        
        {isUserList ? (
          <>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <div className="modal-group-select">
              <GroupSelect
                value={group}
                onChange={(e) => setGroup(e.target.value)}
                groups={groups}
              />
            </div>
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Group name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <div className="modal-group-select">
              <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </>
        )} 
        <div className="modal-button">
          <button type="submit">Save</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

EditModal.propTypes = {
  item: PropTypes.object.isRequired,
  isUserList: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default EditModal;
