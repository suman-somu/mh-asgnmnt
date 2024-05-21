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
        <main className="w-full h-full flex items-center justify-center p-10 pt-32 overflow-auto">
            <div className="bg-secondarylight bg-opacity-5 border border-secondarylight border-opacity-50 rounded-[2rem] h-full min-w-[300px] w-full overflow-auto p-5 md:p-20 flex flex-col gap-4 items-center backdrop-filter backdrop-blur-md">
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search"
                    className="border border-gray-500 shadow-2xl w-full max-w-[500px] p-3 m-5 rounded-md bg-primarydark text-secondarylight placeholder-gray-400 focus:outline-none focus:border-secondarylight focus:ring focus:ring-secondarylight focus:ring-opacity-50"
                />
                <div className="overflow-auto flex flex-col items-center w-full">
                    {users.map((user) => (
                        <UserItem key={user._id} user={user} onView={onView} />
                    ))}
                </div>
                <div className="flex text-primarydark font-bold gap-2 mt-4">
                    <button onClick={() => setPage(page - 1)} disabled={page === 1} className="w-32 h-10 bg-secondarylight text-primarydark hover:bg-primarylight transition-all rounded-md disabled:opacity-20 disabled:cursor-not-allowed">
                        Previous
                    </button>
                    <button onClick={() => setPage(page + 1)} disabled={users.length < 10} className="w-32 h-10 bg-secondarylight text-primarydark hover:bg-primarylight transition-all rounded-md disabled:opacity-20 disabled:cursor-not-allowed">
                        Next
                    </button>
                </div>
            </div>
        </main>
    );
};

export default UserList;
