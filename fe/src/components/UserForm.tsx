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
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={user.name} onChange={handleChange} placeholder="Name" required />
      <input type="date" name="dob" value={user.dob} onChange={handleChange} placeholder="Date of Birth" required />
      <input type="text" name="contact" value={user.contact} onChange={handleChange} placeholder="Contact" required />
      <input type="email" name="email" value={user.email} onChange={handleChange} placeholder="Email" required />
      <textarea name="description" value={user.description} onChange={handleChange} placeholder="Description"></textarea>
      <button type="submit">{userId ? 'Update' : 'Create'}</button>
    </form>
  );
};

export default UserForm;
