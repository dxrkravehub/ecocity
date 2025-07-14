import React from 'react';
import { Brain, Gamepad2, Camera, Server } from 'lucide-react';

interface HeroProps {
  language: 'en' | 'ru';
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  const texts = {
    en: {
      mvp: 'MVP Version',
      description: 'Innovative platform for creating smart cities of the future',
      aiLearning: 'AI Learning',
      aiDesc: 'Machine learning through gamification',
      gamification: 'Gamification',
      gamificationDesc: 'Interactive system engagement',
      ioeCameras: 'IoE Cameras',
      ioeDesc: 'Internet of Everything for city monitoring',
      smartCity: 'Smart City',
      smartCityDesc: 'Future server infrastructure',
      learnMore: 'Learn More'
    },
    ru: {
      mvp: 'MVP Версия',
      description: 'Инновационная платформа для создания умных городов будущего',
      aiLearning: 'ИИ Обучение',
      aiDesc: 'Машинное обучение через геймификацию',
      gamification: 'Геймификация',
      gamificationDesc: 'Интерактивное взаимодействие с системой',
      ioeCameras: 'IoE Камеры',
      ioeDesc: 'Интернет всего для мониторинга города',
      smartCity: 'Умный Город',
      smartCityDesc: 'Серверная инфраструктура будущего',
      learnMore: 'Узнать больше'
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-green-50 to-cyan-50">
        <div className="absolute top-20 left-20 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main logo and title */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 mb-6 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-500 to-cyan-500 rounded-full blur-lg opacity-60 animate-pulse"></div>
              <div className="relative bg-white/30 backdrop-blur-xl rounded-full p-4 border border-white/40 shadow-2xl">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">E</span>
                </div>
              </div>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-green-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                EcoCity
              </span>
            </h1>
            
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-8">
              <span className="text-gray-700 font-semibold text-lg">{texts[language].mvp}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed">
            {texts[language].description}
          </p>

          {/* Feature cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="group">
              <div className="bg-white/20 backdrop-blur-xl rounded-2xl p-6 border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <Brain className="w-12 h-12 text-green-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-gray-800 mb-2">{texts[language].aiLearning}</h3>
                <p className="text-gray-600 text-sm">{texts[language].aiDesc}</p>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white/20 backdrop-blur-xl rounded-2xl p-6 border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <Gamepad2 className="w-12 h-12 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-gray-800 mb-2">{texts[language].gamification}</h3>
                <p className="text-gray-600 text-sm">{texts[language].gamificationDesc}</p>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white/20 backdrop-blur-xl rounded-2xl p-6 border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <Camera className="w-12 h-12 text-cyan-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-gray-800 mb-2">{texts[language].ioeCameras}</h3>
                <p className="text-gray-600 text-sm">{texts[language].ioeDesc}</p>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white/20 backdrop-blur-xl rounded-2xl p-6 border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <Server className="w-12 h-12 text-purple-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-gray-800 mb-2">{texts[language].smartCity}</h3>
                <p className="text-gray-600 text-sm">{texts[language].smartCityDesc}</p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <button className="relative px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-bold rounded-full hover:scale-105 transition-all duration-200 shadow-xl">
              {texts[language].learnMore}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;