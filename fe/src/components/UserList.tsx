import React, { useState, useEffect } from 'react';
import { getUsers } from '../services/userService';
import { User } from '../types/User';
import UserItem from './UserItem';
import UserDetailModal from './UserDetailModal';
import EditForm from './EditForm';

const UserList: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState('');
    const [totalPages, setTotalPages] = useState(1);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [isEditFormOpen, setIsEditFormOpen] = useState(false);

    useEffect(() => {
        getUsers(page, 10, search).then((response) => {
            setUsers(response.data.users);
            setTotalPages(response.data.totalPages);
        });
    }, [page, search]);

    const handleEdit = (user: User) => {
        setSelectedUser(user);
        setIsEditFormOpen(true);
    };

    const handleCloseEditForm = () => {
        setIsEditFormOpen(false);
        setSelectedUser(null);
        getUsers(page, 10, search).then((response) => setUsers(response.data.users));
    };

    const handlePageChange = (newPage: number) => {
        if (newPage > 0 && newPage <= totalPages) {
            setPage(newPage);
        }
    };

    return (
        <main className="w-full h-full flex items-center justify-center p-10 pt-32 overflow-auto">
            <div className="bg-secondarylight bg-opacity-5 border border-secondarylight border-opacity-50 rounded-xl h-full min-h-fit min-w-[300px] w-full overflow-auto p-5 md:p-20 flex flex-col gap-4 items-center backdrop-filter backdrop-blur-md">
                <input
                    type="text"
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value)
                        setPage(1)
                    }}
                    placeholder="Search"
                    className="border border-gray-500 shadow-2xl w-full max-w-[500px] p-3 m-5 rounded-md bg-primarydark text-secondarylight placeholder-gray-400 focus:outline-none focus:border-secondarylight focus:ring focus:ring-secondarylight focus:ring-opacity-50"
                />
                <div className="overflow-auto flex flex-col items-center w-full min-h-20">
                    {users.map((user) => (
                        <UserItem key={user._id} user={user} onView={setSelectedUser} />
                    ))}
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                    <button
                        onClick={() => handlePageChange(page - 1)}
                        disabled={page === 1}
                        className="w-28 h-10 bg-secondarylight text-primarydark hover:bg-primarylight transition-all rounded-md disabled:opacity-20 disabled:cursor-not-allowed"
                    >
                        Previous
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i + 1}
                            onClick={() => handlePageChange(i + 1)}
                            className={`w-10 h-10 ${page === i + 1 ? 'bg-secondarylight text-primarydark' : 'bg-primarylight bg-opacity-10 border border-primarylight text-secondarylight'} hover:bg-primarylight hover:text-primarydark transition-all rounded-md`}
                        >
                            {i + 1}
                        </button>
                    ))}
                    <button
                        onClick={() => handlePageChange(page + 1)}
                        disabled={page === totalPages}
                        className="w-28 h-10 bg-secondarylight text-primarydark hover:bg-primarylight transition-all rounded-md disabled:opacity-20 disabled:cursor-not-allowed"
                    >
                        Next
                    </button>
                </div>
            </div>
            {selectedUser && (
                <UserDetailModal
                    user={selectedUser}
                    onClose={() => setSelectedUser(null)}
                    onEdit={() => handleEdit(selectedUser)}
                    onDelete={() => {
                        setSelectedUser(null);
                        getUsers(page, 10, search).then((response) => setUsers(response.data.users));
                    }}
                />
            )}
            {isEditFormOpen && selectedUser && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <EditForm
                        onClose={() => setIsEditFormOpen(false)}
                        userId={selectedUser._id ?? ""}
                        onSave={handleCloseEditForm}
                    />
                </div>
            )}
        </main>
    );
};

export default UserList;
