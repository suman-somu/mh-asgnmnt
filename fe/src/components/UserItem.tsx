// src/components/UserItem.tsx
import React from 'react';
import { User } from '../types/User';

interface UserItemProps {
    user: User;
    onView: (id: string) => void;
}

const UserItem: React.FC<UserItemProps> = ({ user, onView }) => {
    return (
        <div
            onClick={() => user._id && onView(user._id)}
            className="w-full sm:w-96  max-w-[650px] h-32 rounded-3xl m-1 bg-primarylight bg-opacity-30 text-primarylight flex flex-col justify-center items-center hover:bg-opacity-50 cursor-pointer transition-all"
        >
            <h3 className="font-bold text-xl sm:text-2xl">{user.name}</h3>
            <p className="text-sm sm:text-base">{user.email}</p>
        </div>
    );
};

export default UserItem;
