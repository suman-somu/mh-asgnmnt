// src/components/UserList.tsx
import React, { useState, useEffect } from 'react';
import { getUsers } from '../services/userService';
import { User } from '../types/User';
import UserItem from './UserItem';

interface UserListProps {
  onView: (id: string) => void;
}

const UserList: React.FC<UserListProps> = ({ onView }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getUsers(page, 10, search).then((response) => setUsers(response.data.users));
  }, [page, search]);

  return (
    <div>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search" />
      {users.map((user) => (
        <UserItem key={user._id} user={user} onView={onView} />
      ))}
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Previous
      </button>
      <button onClick={() => setPage(page + 1)} disabled={users.length < 10}>
        Next
      </button>
    </div>
  );
};

export default UserList;