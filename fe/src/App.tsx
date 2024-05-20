// src/App.tsx
import React, { useState } from 'react';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import UserDetail from './components/UserDetail';

const App: React.FC = () => {
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(true);

  const handleUserSelect = (id: string) => {
    setSelectedUserId(id);
    setIsEditing(false);
  };

  const handleUserEdit = (id: string) => {
    setSelectedUserId(id);
    setIsEditing(true);
  };

  const handleUserSave = () => {
    setSelectedUserId(null);
    setIsEditing(false);
  };

  const handleUserDelete = () => {
    setSelectedUserId(null);
  };

  return (
    <div>
      <button onClick={
        () => {
          setIsEditing(!isEditing);
        }
      }>toggle</button>
      {isEditing ? (
        <UserForm userId={selectedUserId!} onSave={handleUserSave} />
      ) : selectedUserId ? (
        <UserDetail userId={selectedUserId} onEdit={handleUserEdit} onDelete={handleUserDelete} />
      ) : (
        <UserList onView={handleUserSelect} />
      )}
    </div>
  );
};

export default App;
