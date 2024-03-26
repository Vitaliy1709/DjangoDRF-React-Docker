import React from "react";
import PropTypes from "prop-types";
import "../styles/styles.css";

const DeleteModal = ({ item, onClose, isUserList, onSubmit }) => {

  const handleDelete = () => {
    onSubmit(item);
    onClose();
  };

  return (
    <div className="modal">
      <h2>
        Delete {isUserList ? "User" : "Group"}
      </h2>
      <p>
        Are you sure you want to delete {isUserList ? item.username : item.name}?
      </p>
      <div className="modal-button">
        <button onClick={handleDelete}>Delete</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

DeleteModal.propTypes = {
  item: PropTypes.object.isRequired,
  isUserList: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired
};

export default DeleteModal;
