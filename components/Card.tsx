
import React from 'react';

interface CardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-transform duration-300 hover:scale-[1.03] hover:shadow-md flex flex-col items-center text-center">
      <div className="mb-4 text-blue-600">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default Card;
