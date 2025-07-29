import React from "react";
import '../index.css';
type BentoCardProps = {
  title: string;
  description: string;
  url: string;
};

const BentoCard: React.FC<BentoCardProps> = ({ title, description, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-lg border border-gray-300 p-6 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white hover:bg-gray-50"
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </a>
  );
};

export default BentoCard;