// src/components/UserForm.tsx
import React, { useState, useEffect } from 'react';
import { User } from '../types/User';
import { createUser, updateUser, getUserById } from '../services/userService';

interface UserFormProps {
  userId?: string;
  onSave: () => void;
}

const UserForm: React.FC<UserFormProps> = ({ userId, onSave }) => {
  const [user, setUser] = useState<User>({
    name: '',
    dob: '',
    contact: '',
    email: '',
    description: '',
  });

  useEffect(() => {
    if (userId) {
      getUserById(userId).then((response) => setUser(response.data));
    }
  }, [userId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (userId) {
      await updateUser(userId, user);
    } else {
      await createUser(user);
    }
    onSave();
  };

  return (
    <main className="w-full h-full min-h-fit flex flex-col items-center justify-start p-32 pb-10 px-20 overflow-auto">
      <form onSubmit={handleSubmit} className="min-w-[270px] sm:w-[70%] max-w-[600px] p-5 sm:p-10 rounded-2xl border border-primarylight border-opacity-20 flex flex-col gap-4 justify-center items-end bg-secondarylight bg-opacity-10 backdrop-filter backdrop-blur-sm">
        <div className="w-full">
          <label className="block font-semibold text-secondarylight mb-2" htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={user.name} onChange={handleChange} placeholder="Name" required className="w-full p-2 rounded-md bg-primarydark text-secondarylight border border-gray-600 focus:outline-none focus:border-[#E8DFCA]" />
        </div>
        <div className="w-full">
          <label className="block font-semibold text-secondarylight mb-2" htmlFor="dob">Date of Birth</label>
          <input type="date" id="dob" name="dob" value={user.dob} onChange={handleChange} placeholder="Date of Birth" required className="w-full p-2 rounded-md bg-primarydark text-secondarylight border border-gray-600 focus:outline-none focus:border-[#E8DFCA]" />
        </div>
        <div className="w-full">
          <label className="block font-semibold text-secondarylight mb-2" htmlFor="contact">Contact</label>
          <input type="text" id="contact" name="contact" value={user.contact} onChange={handleChange} placeholder="Contact" required className="w-full p-2 rounded-md bg-primarydark text-secondarylight border border-gray-600 focus:outline-none focus:border-[#E8DFCA]" />
        </div>
        <div className="w-full">
          <label className="block font-semibold text-secondarylight mb-2" htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={user.email} onChange={handleChange} placeholder="Email" required className="w-full p-2 rounded-md bg-primarydark text-secondarylight border border-gray-600 focus:outline-none focus:border-[#E8DFCA]" />
        </div>
        <div className="w-full">
          <label className="block font-semibold text-secondarylight mb-2" htmlFor="description">Description</label>
          <textarea id="description" name="description" value={user.description} onChange={handleChange} placeholder="Description" className="w-full p-2 rounded-md bg-primarydark text-secondarylight border border-gray-600 focus:outline-none focus:border-[#E8DFCA]"></textarea>
        </div>
        <button type="submit" className="w-20 h-10 bg-secondarylight bg-opacity-30 rounded-md text-secondarylight font-bold transition-all hover:text-white hover:bg-opacity-50">{userId ? 'Update' : 'Create'}</button>
      </form>
    </main>
  );
};

export default UserForm;
