import React from 'react';

interface UserCardProps {
  name: string;
  role: string;
  email: string;
  avatar?: string;
}

const UserCard: React.FC<UserCardProps> = ({ name, role, email, avatar }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
          {avatar ? (
            <img src={avatar} alt={name} className="w-full h-full rounded-full" />
          ) : (
            <span className="text-2xl text-blue-600 font-medium">
              {name.charAt(0).toUpperCase()}
            </span>
          )}
        </div>
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-gray-600">{role}</p>
          <p className="text-sm text-gray-500">{email}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
