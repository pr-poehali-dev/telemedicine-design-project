
import React from 'react';
import Icon from '@/components/ui/icon';

const steps = [
  {
    icon: 'UserPlus',
    title: 'Регистрация',
    description: 'Создайте аккаунт и заполните медицинскую анкету за 2 минуты'
  },
  {
    icon: 'Video',
    title: 'Консультация',
    description: 'Подключитесь к врачу через видеосвязь в удобное время'
  },
  {
    icon: 'FileText',
    title: 'Рецепт и рекомендации',
    description: 'Получите электронный рецепт и персональные рекомендации'
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-medical-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-gray-900 mb-6">
            Как это работает
          </h2>
          <p className="text-xl text-medical-darkgray max-w-2xl mx-auto">
            Три простых шага к получению качественной медицинской помощи
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="text-center group animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Step Number */}
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-medical-blue rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors duration-300 medical-shadow">
                  <Icon name={step.icon as any} size={32} className="text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-medical-green rounded-full flex items-center justify-center text-white font-bold font-montserrat">
                  {index + 1}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-semibold font-montserrat text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-medical-darkgray leading-relaxed">
                {step.description}
              </p>

              {/* Connector Line (except last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-medical-blue/30 to-transparent transform translate-x-1/2"></div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 max-w-md mx-auto medical-shadow">
            <Icon name="Clock" size={48} className="text-medical-green mx-auto mb-4" />
            <h3 className="text-xl font-semibold font-montserrat text-gray-900 mb-2">
              Среднее время ожидания
            </h3>
            <div className="text-3xl font-bold text-medical-blue font-montserrat">
              < 5 минут
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
