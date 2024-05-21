// src/components/UserDetailModal.tsx
import React from 'react';
import { User } from '../types/User';

interface UserDetailModalProps {
  user: User | null;
  onClose: () => void;
  onEdit: (id: string) => void;
  onDelete: () => void;
}

const UserDetailModal: React.FC<UserDetailModalProps> = ({ user, onClose, onEdit, onDelete }) => {
  if (!user) return null;

  const handleDelete = async () => {
    // await deleteUser(user._id);
    onDelete();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-primarydark bg-opacity-10 backdrop-filter backdrop-blur-md rounded-3xl border border-secondarylight border-opacity-20 p-10 w-full max-w-lg">
        <button className="absolute top-4 right-4 p-2 text-white" onClick={onClose} >✕</button>
        <h2 className="text-3xl font-bold text-secondarylight">{user.name}</h2>
        <p className="text-secondarylight"><strong>Email:</strong> {user.email}</p>
        <p className="text-secondarylight"><strong>Contact:</strong> {user.contact}</p>
        <p className="text-secondarylight"><strong>Description:</strong> {user.description}</p>
        <div className="flex gap-4 mt-4">
          <button 
            onClick={() => onEdit(user._id??'')} 
            className="w-20 h-10 bg-secondarylight bg-opacity-50 rounded-md text-secondarylight font-bold transition-all hover:text-white hover:bg-opacity-75"
          >
            Edit
          </button>
          <button 
            onClick={handleDelete} 
            className="w-20 h-10 bg-red-600 bg-opacity-50 rounded-md text-secondarylight font-bold transition-all hover:text-white hover:bg-opacity-75"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDetailModal;