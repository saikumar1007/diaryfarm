import React from 'react';
import { Bot as Bottle, Clock, Heart, Shield } from 'lucide-react';
import { Feature } from '../../types';

const features: Feature[] = [
  {
    id: 'farm-fresh',
    title: 'Farm Fresh',
    description: 'Direct from our partner farms to ensure maximum freshness and quality',
    icon: 'bottle',
    color: 'green',
  },
  {
    id: 'daily-delivery',
    title: 'Daily Delivery',
    description: 'Reliable morning deliveries to fit your schedule perfectly',
    icon: 'clock',
    color: 'gray',
  },
  {
    id: 'family-care',
    title: 'Family Care',
    description: 'Treating every customer like family with personalized service',
    icon: 'heart',
    color: 'amber',
  },
  {
    id: 'quality-assured',
    title: 'Quality Assured',
    description: 'Rigorous quality checks to ensure the purest milk reaches you',
    icon: 'shield',
    color: 'blue',
  },
];

const FeatureIcon: React.FC<{ icon: string; color: string }> = ({ icon, color }) => {
  const colorClasses = {
    green: 'bg-green-100 text-green-500',
    gray: 'bg-gray-100 text-gray-500',
    amber: 'bg-amber-100 text-amber-500',
    blue: 'bg-blue-100 text-blue-500',
  };
  
  const colorClass = colorClasses[color as keyof typeof colorClasses] || colorClasses.green;
  
  return (
    <div className={`${colorClass} w-16 h-16 rounded-full flex items-center justify-center mb-4`}>
      {icon === 'bottle' && <Bottle size={28} />}
      {icon === 'clock' && <Clock size={28} />}
      {icon === 'heart' && <Heart size={28} />}
      {icon === 'shield' && <Shield size={28} />}
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Village Milk?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're committed to delivering the highest quality milk with exceptional service
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id}
              className="text-center flex flex-col items-center"
            >
              <FeatureIcon icon={feature.icon} color={feature.color} />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;