import React, { useState, useEffect } from 'react';
import { User } from '../types/User';
import { updateUser, getUserById } from '../services/userService';

interface EditFormProps {
  userId: string;
  onSave: () => void;
  onClose : () => void;
}

const EditForm: React.FC<EditFormProps> = ({ userId, onSave, onClose }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (userId) {
      getUserById(userId).then((response) => {
        const userData = response.data;
                if (userData.dob) {
          userData.dob = new Date(userData.dob).toISOString().split('T')[0];
        }
        setUser(userData);
      });
    }
  }, [userId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (user) {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (user) {
      await updateUser(userId, user);
      onSave();
    }
  };

  if (!user) return <div>Loading...</div>;

  return (
    <main className="w-full h-full min-h-fit flex flex-col items-center justify-start p-32 pb-10 px-20 overflow-auto">
      <form onSubmit={handleSubmit} className="min-w-[270px] sm:w-[70%] max-w-[600px] p-5 sm:p-10 rounded-2xl border border-primarylight border-opacity-20 flex flex-col gap-4 justify-center items-end bg-secondarylight bg-opacity-10 backdrop-filter backdrop-blur-sm">
        <button className="absolute top-4 right-4 p-2 text-white" onClick={onClose}>✕</button>
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
        </div><div className="flex gap-4">
          <button type="submit" className="w-20 h-10 bg-secondarylight bg-opacity-30 rounded-md text-secondarylight font-bold transition-all hover:text-white hover:bg-opacity-50">Update</button>
          <button type="button" onClick={onClose} className="w-20 h-10 bg-red-600 bg-opacity-30 rounded-md text-secondarylight font-bold transition-all hover:text-white hover:bg-opacity-50">Cancel</button>
        </div>
        </form>
    </main>
  );
};

export default EditForm;
