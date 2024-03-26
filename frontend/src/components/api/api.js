import axios from "axios";

// Функция для получения списка пользователей
export const fetchUsers = async () => {
  try {
    const response = await axios.get("/api/users/");
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

// Функция для добавления нового пользователя
export const addUser = async (newUser) => {
  try {
    const response = await axios.post("/api/users/add/", newUser);
    return response.data;
  } catch (error) {
    console.error("Error adding user:", error);
    throw error;
  }
};

// Функция для редактирования существующего пользователя
export const editUser = async (userId, updatedUser) => {
  try {
    const response = await axios.put(`/api/users/${userId}/edit/`, updatedUser);
    return response.data;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};

// Функция для удаления пользователя
export const deleteUser = async (userId) => {
  try {
    const response = await axios.delete(`/api/users/${userId}/delete/`);
    return response.data;
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
};

// Функция для получения списка групп
export const fetchGroups = async () => {
  try {
    const response = await axios.get("/api/groups/");
    return response.data;
  } catch (error) {
    console.error("Error fetching groups:", error);
    throw error;
  }
};

// Функция для добавления новой группы
export const addGroup = async (newGroup) => {
  try {
    const response = await axios.post("/api/groups/add/", newGroup);
    return response.data;
  } catch (error) {
    console.error("Error adding group:", error);
    throw error;
  }
};

// Функция для редактирования существующей группы
export const editGroup = async (groupId, updatedGroup) => {
  try {
    const response = await axios.put(`/api/groups/${groupId}/edit/`, updatedGroup);
    return response.data;
  } catch (error) {
    console.error("Error updating group:", error);
    throw error;
  }
};

// Функция для удаления группы
export const deleteGroup = async (groupId) => {
  try {
    const response = await axios.delete(`/api/groups/${groupId}/delete/`);
    return response.data;
  } catch (error) {
    console.error("Error deleting group:", error);
    throw error;
  }
};
