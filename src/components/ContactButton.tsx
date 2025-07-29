import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

interface ContactButtonProps {
  className?: string;
  variant?: 'whatsapp' | 'call';
  size?: 'sm' | 'md' | 'lg';
}

const ContactButton: React.FC<ContactButtonProps> = ({ 
  className = '', 
  variant = 'whatsapp',
  size = 'md' 
}) => {
  const phoneNumber = '+524443113785';
  const whatsappMessage = encodeURIComponent(
    'Hola, necesito información sobre sus servicios. ¿Podrían proporcionarme su ubicación para ayudarme con el servicio?'
  );

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${whatsappMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  if (variant === 'whatsapp') {
    return (
      <button
        onClick={handleWhatsAppClick}
        className={`${sizeClasses[size]} bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg 
                   transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl 
                   hover:scale-105 ${className}`}
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-5 h-5" />
        WhatsApp
      </button>
    );
  }

  return (
    <button
      onClick={handleCallClick}
      className={`${sizeClasses[size]} bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg 
                 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl 
                 hover:scale-105 ${className}`}
      aria-label="Llamar por teléfono"
    >
      <Phone className="w-5 h-5" />
      Llamar
    </button>
  );
};

export default ContactButton;