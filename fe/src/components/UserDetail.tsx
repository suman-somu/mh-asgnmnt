// src/components/UserDetail.tsx
import React, { useState, useEffect } from 'react';
import { User } from '../types/User';
import { getUserById, deleteUser } from '../services/userService';

interface UserDetailProps {
  userId: string;
  onEdit: (id: string) => void;
  onDelete: () => void;
}

const UserDetail: React.FC<UserDetailProps> = ({ userId, onEdit, onDelete }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    getUserById(userId).then((response) => setUser(response.data));
  }, [userId]);

  const handleDelete = async () => {
    await deleteUser(userId);
    onDelete();
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.contact}</p>
      <p>{user.description}</p>
      <button onClick={() => onEdit(userId)}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default UserDetail;
