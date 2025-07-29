import React from 'react';
import { Phone, MessageCircle, Home, Wrench } from 'lucide-react';
import ContactButton from './ContactButton';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Wrench className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">ServicePro</h1>
              <p className="text-sm text-gray-600">Maintenance & Nettoyage</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a 
              href="/" 
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Home className="w-4 h-4" />
              Accueil
            </a>
            
            <div className="h-6 w-px bg-gray-300"></div>
            
            <div className="flex items-center gap-2">
              <ContactButton variant="whatsapp" size="sm" />
              <ContactButton variant="call" size="sm" />
            </div>
          </div>

          <div className="md:hidden">
            <ContactButton variant="whatsapp" size="sm" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;