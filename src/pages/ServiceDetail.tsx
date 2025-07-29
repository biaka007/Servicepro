import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Clock, Users, Shield } from 'lucide-react';
import ContactButton from '../components/ContactButton';
import { services } from '../data/services';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const service = services.find(s => s.id === id);
  
  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Service non trouvé</h1>
          <button
            onClick={() => navigate('/')}
            className="text-blue-600 hover:text-blue-700 flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l'accueil
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour aux services
        </button>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="relative h-64 bg-gradient-to-r from-blue-500 to-blue-600">
            <div 
              className="absolute inset-0 opacity-20 bg-cover bg-center"
              style={{ backgroundImage: `url(${service.image})` }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-20 h-20 object-contain mx-auto mb-4 bg-white/20 rounded-lg p-3"
                />
                <h1 className="text-4xl font-bold mb-2">{service.title}</h1>
                <p className="text-xl opacity-90">{service.price}</p>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Description du service</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                <h3 className="text-xl font-bold text-gray-800 mb-4">Ce qui est inclus:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-gray-50 p-6 rounded-lg">
                  <div className="text-center">
                    <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-gray-800">Durée</h4>
                    <p className="text-gray-600">2-4 heures</p>
                  </div>
                  <div className="text-center">
                    <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-gray-800">Équipe</h4>
                    <p className="text-gray-600">2-3 professionnels</p>
                  </div>
                  <div className="text-center">
                    <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-gray-800">Garantie</h4>
                    <p className="text-gray-600">30 jours</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg sticky top-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Réserver ce service</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-4">{service.price}</div>
                  
                  <div className="space-y-3 mb-6">
                    <ContactButton variant="whatsapp" size="lg" className="w-full" />
                    <ContactButton variant="call" size="lg" className="w-full" />
                  </div>

                  <div className="text-sm text-gray-600 space-y-2">
                    <p>✓ Devis gratuit</p>
                    <p>✓ Intervention rapide</p>
                    <p>✓ Matériel professionnel inclus</p>
                    <p>✓ Service garanti</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;