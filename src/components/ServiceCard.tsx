import React from 'react';
import { ArrowRight } from 'lucide-react';
import ContactButton from './ContactButton';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  price: string;
  features: string[];
  onLearnMore: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  image,
  price,
  features,
  onLearnMore,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 relative">
      {/* Background image overlay */}
      <div 
        className="absolute inset-0 opacity-5 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      />
      
      <div className="relative z-10 p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center relative overflow-hidden">
            <img 
              src={image} 
              alt={title}
              className="w-10 h-10 object-contain opacity-80"
            />
          </div>
          <div className="text-right">
            <span className="text-2xl font-bold text-blue-600">{price}</span>
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        
        <ul className="space-y-2 mb-6">
          {features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-700">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
              {feature}
            </li>
          ))}
        </ul>
        
        <div className="flex gap-2 mb-4">
          <ContactButton variant="whatsapp" size="sm" className="flex-1" />
          <ContactButton variant="call" size="sm" className="flex-1" />
        </div>
        
        <button
          onClick={onLearnMore}
          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 px-4 rounded-lg
                   hover:from-blue-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2
                   shadow-md hover:shadow-lg"
        >
          Savoir plus
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;