import React, { useState, useEffect } from "react";
import { addUser, addGroup, fetchGroups } from "../../api/api";
import GroupSelect from "../groupSelect/GroupSelect";
import "../styles/styles.css";

const AddModal = ({ isUserList, onSubmit, onClose }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [groups, setGroups] = useState([]);
  const [username, setUsername] = useState('');
  const [group, setGroup] = useState('');

  useEffect(() => {
    if (isUserList) {
      fetchGroups()
        .then(groupsData => {
          setGroups(groupsData);
        })
        .catch(error => {
          console.error("Error fetching groups:", error);
          alert("Error fetching group:");
        });
    }
  }, [isUserList]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isUserList) {
        const newUser = { username, group };

        await onSubmit(newUser);
      } else {
        const newGroup = { name, description };
        await onSubmit(newGroup);
      }
      onClose();
    } catch (error) {
      alert(`Error adding ${isUserList}: ${error.message}`);
    }
  };

  return (
    <div className="modal">
      <h2>Add {
        isUserList ? 'User' : 'Group'}
      </h2>
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

export default AddModal;
