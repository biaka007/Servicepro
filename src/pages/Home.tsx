import React from 'react';
import { useNavigate } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import ContactButton from '../components/ContactButton';
import { services } from '../data/services';
import { Phone, MessageCircle, MapPin, Clock, Star } from 'lucide-react';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleLearnMore = (serviceId: string) => {
    navigate(`/service/${serviceId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Services de <span className="text-blue-600">Maintenance</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Votre partenaire de confiance pour tous vos besoins de maintenance et de nettoyage.
            Services professionnels avec garantie de qualité.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <ContactButton variant="whatsapp" size="lg" />
            <ContactButton variant="call" size="lg" />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Nos Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez notre gamme complète de services de maintenance professionnels
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                image={service.image}
                price={service.price}
                features={service.features}
                onLearnMore={() => handleLearnMore(service.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Service Rapide</h3>
              <p className="text-gray-600">Intervention dans les plus brefs délais</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Qualité Garantie</h3>
              <p className="text-gray-600">Satisfaction client garantie à 100%</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Service Local</h3>
              <p className="text-gray-600">Disponible dans votre région</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Besoin d'un Devis?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Contactez-nous dès maintenant pour obtenir un devis gratuit et personnalisé
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <ContactButton 
              variant="whatsapp" 
              size="lg" 
              className="bg-green-500 hover:bg-green-600" 
            />
            <ContactButton 
              variant="call" 
              size="lg" 
              className="bg-white hover:bg-gray-100 text-blue-600 hover:text-blue-700" 
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;