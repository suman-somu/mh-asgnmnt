// src/components/UserItem.tsx
import React from 'react';
import { User } from '../types/User';

interface UserItemProps {
  user: User;
  onView: (id: string) => void;
}

const UserItem: React.FC<UserItemProps> = ({ user, onView }) => {
  return (
    <div onClick={() => user._id && onView(user._id)}>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );
};

export default UserItem;