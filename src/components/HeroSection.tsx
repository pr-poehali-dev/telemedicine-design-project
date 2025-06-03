import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-medical-blue to-blue-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full border-2 border-white/20"></div>
        <div className="absolute top-40 right-32 w-20 h-20 rounded-full border border-white/20"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 rounded-full border border-white/20"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
            <Icon name="Shield" size={16} className="mr-2" />
            <span className="text-sm font-medium">
              Безопасные медицинские консультации
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold font-montserrat mb-6 leading-tight">
            Дистанционные
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
              консультации
            </span>
            <br />с врачами 24/7
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Получите квалифицированную медицинскую помощь не выходя из дома.
            Безопасно, удобно, профессионально.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              size="lg"
              className="bg-white text-medical-blue hover:bg-gray-100 font-semibold px-8 py-6 text-lg rounded-xl medical-shadow transform hover:scale-105 transition-all duration-200"
            >
              <Icon name="Calendar" size={20} className="mr-3" />
              Записаться на прием
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-medical-red bg-medical-red text-white hover:bg-red-600 font-semibold px-8 py-6 text-lg rounded-xl transform hover:scale-105 transition-all duration-200"
            >
              <Icon name="Phone" size={20} className="mr-3" />
              Экстренная помощь
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold font-montserrat mb-2">
                1000+
              </div>
              <div className="text-blue-200">Врачей в сети</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold font-montserrat mb-2">
                24/7
              </div>
              <div className="text-blue-200">Круглосуточно</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold font-montserrat mb-2">
                50k+
              </div>
              <div className="text-blue-200">Довольных пациентов</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-white/60" />
      </div>
    </section>
  );
};

export default HeroSection;
