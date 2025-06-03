import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-medical-blue rounded-lg flex items-center justify-center mr-4">
                <Icon name="Heart" size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold font-montserrat">ТелеМед</h3>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Современная телемедицинская платформа для получения качественной
              медицинской помощи на расстоянии. Безопасно, удобно,
              профессионально.
            </p>
            <div className="flex space-x-4">
              {["Phone", "Mail", "MapPin"].map((icon, index) => (
                <div
                  key={index}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-medical-blue transition-colors cursor-pointer"
                >
                  <Icon name={icon as any} size={18} />
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold font-montserrat mb-6">
              Услуги
            </h4>
            <div className="space-y-3">
              {[
                "Онлайн консультации",
                "Экстренная помощь",
                "Электронные рецепты",
                "Медицинские справки",
              ].map((item, index) => (
                <div
                  key={index}
                  className="text-gray-400 hover:text-white cursor-pointer transition-colors"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold font-montserrat mb-6">
              Поддержка
            </h4>
            <div className="space-y-3">
              {[
                "Центр помощи",
                "Контакты",
                "Политика конфиденциальности",
                "Условия использования",
              ].map((item, index) => (
                <div
                  key={index}
                  className="text-gray-400 hover:text-white cursor-pointer transition-colors"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            © 2024 ТелеМед. Все права защищены.
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center text-gray-400">
              <Icon
                name="Shield"
                size={16}
                className="mr-2 text-medical-green"
              />
              <span className="text-sm">Защищено SSL</span>
            </div>
            <div className="flex items-center text-gray-400">
              <Icon
                name="Award"
                size={16}
                className="mr-2 text-medical-green"
              />
              <span className="text-sm">Лицензия Минздрава</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
