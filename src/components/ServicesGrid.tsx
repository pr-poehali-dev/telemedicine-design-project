import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const services = [
  {
    icon: "Stethoscope",
    title: "Терапия",
    description:
      "Общие консультации, диагностика, лечение простудных заболеваний",
    color: "bg-blue-50 text-blue-600 border-blue-200",
  },
  {
    icon: "Heart",
    title: "Кардиология",
    description:
      "Консультации кардиолога, мониторинг сердечно-сосудистой системы",
    color: "bg-red-50 text-red-600 border-red-200",
  },
  {
    icon: "Baby",
    title: "Педиатрия",
    description: "Детские врачи, консультации по здоровью и развитию ребенка",
    color: "bg-green-50 text-green-600 border-green-200",
  },
  {
    icon: "Brain",
    title: "Неврология",
    description: "Консультации невролога, лечение головных болей и неврозов",
    color: "bg-purple-50 text-purple-600 border-purple-200",
  },
  {
    icon: "Eye",
    title: "Офтальмология",
    description: "Консультации окулиста, проверка зрения, подбор очков",
    color: "bg-yellow-50 text-yellow-600 border-yellow-200",
  },
  {
    icon: "Pill",
    title: "Эндокринология",
    description:
      "Лечение диабета, нарушений щитовидной железы, гормональных сбоев",
    color: "bg-indigo-50 text-indigo-600 border-indigo-200",
  },
];

const ServicesGrid = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-gray-900 mb-6">
            Наши услуги
          </h2>
          <p className="text-xl text-medical-darkgray max-w-2xl mx-auto">
            Полный спектр медицинских консультаций от ведущих специалистов
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-medical-blue hover:shadow-lg transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`w-16 h-16 rounded-xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon name={service.icon as any} size={28} />
              </div>

              <h3 className="text-xl font-semibold font-montserrat text-gray-900 mb-3">
                {service.title}
              </h3>

              <p className="text-medical-darkgray mb-6 leading-relaxed">
                {service.description}
              </p>

              <Button
                variant="outline"
                className="w-full border-medical-blue text-medical-blue hover:bg-medical-blue hover:text-white transition-colors duration-300"
              >
                Записаться
              </Button>
            </div>
          ))}
        </div>

        {/* Emergency Section */}
        <div className="bg-gradient-to-r from-medical-red to-red-600 rounded-2xl p-8 md:p-12 text-white text-center medical-shadow">
          <Icon
            name="AlertTriangle"
            size={48}
            className="mx-auto mb-6 text-yellow-300"
          />
          <h3 className="text-2xl md:text-3xl font-bold font-montserrat mb-4">
            Экстренная медицинская помощь
          </h3>
          <p className="text-lg mb-8 text-red-100 max-w-2xl mx-auto">
            При острых состояниях и неотложных случаях наши врачи готовы оказать
            помощь немедленно
          </p>
          <Button
            size="lg"
            className="bg-white text-medical-red hover:bg-gray-100 font-semibold px-8 py-4 text-lg rounded-xl"
          >
            <Icon name="Phone" size={20} className="mr-3" />
            Вызвать врача сейчас
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
