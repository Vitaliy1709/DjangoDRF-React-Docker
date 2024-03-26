import React, { useState, useEffect } from "react";
import Navbar from "../navbar/Navbar";
import List from "../list/List";
import EditModal from "../modals/editModal/EditModal";
import AddModal from "../modals/addModal/AddModal";
import DeleteModal from "../modals/deleteModal/DeleteModal";
import { fetchUsers, fetchGroups, addUser, editUser, deleteUser, addGroup, editGroup, deleteGroup } from "../api/api";

const DataLoader = () => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false); 
  const [isUserList, setIsUserList] = useState(true);


  useEffect(() => {
    if (isUserList) {
      fetchUserList();
    } else {
      fetchGroupList();
    }
  }, [isUserList]);

  const fetchUserList = async () => {
    try {
      const userList = await fetchUsers();
      setItems(userList);
    } catch (error) {
      console.error("Error fetching users:", error);
      alert("Error fetching users.");
    }
  };

  const fetchGroupList = async () => {
    try {
      const groupList = await fetchGroups();
      setItems(groupList);
    } catch (error) {
      console.error("Error fetching groups:", error);
      alert("Error fetching groups.");
    }
  };

  const handleAddUser = async () => {
    setShowAddModal(true);
    setIsUserList(true);    
  };

  const handleAddGroup = async () => {
    setShowAddModal(true);
    setIsUserList(false);
  };

  const handleEdit = (item) => {
    setSelectedItem(item);
    setShowEditModal(true);
  };

  const handleDelete = (item) => {
    setSelectedItem(item);
    setShowDeleteModal(true);
  };

  const handleAddSubmit = async (newItem) => {
    try {
      if (isUserList) {
        const existingUser = items.find(user => user.username === newItem.username);
      if (existingUser) {
        alert("User with this username already exists.");
        return;
      }        
        await addUser(newItem);
        fetchUserList();
      } else {
        // Проверяем наличие группы в списке перед добавлением
      const existingGroup = items.find(group => group.name === newItem.name);
      if (existingGroup) {
        alert("Group with this name already exists.");
        return;
      }
        await addGroup(newItem);
        fetchGroupList();
      }
      setShowAddModal(false);    
    } catch (error) {
      console.error("Error adding item:", error);
      alert("Error adding item.");
    }
  };

  const handleEditSubmit = async (updatedItem) => {
    try {
      if (isUserList) {
        await editUser(updatedItem.id, updatedItem);
      } else {
        await editGroup(updatedItem.id, updatedItem);
      }

      // Обновляем список элементов, заменяя измененный элемент на новый
    const updatedItems = items.map(item => item.id === updatedItem.id ? updatedItem : item);
    setItems(updatedItems);

      setShowEditModal(false);
      
    } catch (error) {
      console.error("Error editing item:", error);
      alert("Error editing item.");
    }
  };

  const handleDeleteSubmit = async () => {
    try {
      if (isUserList) {
        await deleteUser(selectedItem.id);
        fetchUserList();
        
      } else {
        await deleteGroup(selectedItem.id);
        fetchGroupList();        
      }

      setShowDeleteModal(false);      
      
    } catch (error) {
      console.error("Error deleting item:", error);
      alert("Error deleting item.");
    }
  };

  return (
    <div>
      <Navbar
        onAddUser={handleAddUser}
        onAddGroup={handleAddGroup}
        onViewUsers={() => setIsUserList(true)}
        onViewGroups={() => setIsUserList(false)}
        isUserList={isUserList}
      />
      <List
        items={items}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      {showEditModal && (
        <EditModal
          item={selectedItem}
          isUserList={isUserList}
          onSubmit={handleEditSubmit}
          onClose={() => setShowEditModal(false)}
        />
      )}
      {showAddModal && (
        <AddModal
          isUserList={isUserList}
          onSubmit={handleAddSubmit}
          onClose={() => setShowAddModal(false)}
        />
      )}
      {showDeleteModal && (
        <DeleteModal
          item={selectedItem}
          onSubmit={handleDeleteSubmit}
          onClose={() => setShowDeleteModal(false)}
          onDelete={handleDelete}
          isUserList={isUserList}
        />
      )}
    </div>
  );
};

export default DataLoader;
