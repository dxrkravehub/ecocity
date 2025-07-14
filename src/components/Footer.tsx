import React from 'react';
import { Leaf, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  language: 'en' | 'ru';
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const texts = {
    en: {
      mvp: 'MVP version',
      description: 'Innovative platform for creating smart cities of the future. We combine AI, gamification and IoE technologies to create a more sustainable urban environment.',
      project: 'Project',
      features: 'Features',
      future: 'Future',
      contact: 'Contact',
      copyright: '© 2024 EcoCity. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Use'
    },
    ru: {
      mvp: 'MVP версия',
      description: 'Инновационная платформа для создания умных городов будущего. Мы объединяем ИИ, геймификацию и IoE технологии для создания более устойчивой городской среды.',
      project: 'Проект',
      features: 'Возможности',
      future: 'Будущее',
      contact: 'Контакты',
      copyright: '© 2024 EcoCity. Все права защищены.',
      privacy: 'Политика конфиденциальности',
      terms: 'Условия использования'
    }
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur-sm opacity-75"></div>
                <div className="relative bg-white/20 backdrop-blur-sm rounded-full p-2 border border-white/30">
                  <Leaf className="w-8 h-8 text-green-400" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  EcoCity
                </h3>
                <p className="text-sm text-gray-400">{texts[language].mvp}</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              {texts[language].description}
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <span className="text-sm font-bold">TG</span>
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <span className="text-sm font-bold">VK</span>
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <span className="text-sm font-bold">YT</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-green-400">{texts[language].project}</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#features" className="hover:text-green-400 transition-colors">{texts[language].features}</a></li>
              <li><a href="#future" className="hover:text-green-400 transition-colors">{texts[language].future}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-blue-400">{texts[language].contact}</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-sm">+7(747)056-69-79</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              {texts[language].copyright}
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-green-400 transition-colors">{texts[language].privacy}</a>
              <a href="#" className="hover:text-green-400 transition-colors">{texts[language].terms}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;