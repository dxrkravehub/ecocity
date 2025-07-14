import React from 'react';
import { Camera, Server, Globe, Cpu, Database, Wifi } from 'lucide-react';

interface FutureProps {
  language: 'en' | 'ru';
}

const Future: React.FC<FutureProps> = ({ language }) => {
  const texts = {
    en: {
      title: 'Future of EcoCity',
      subtitle: 'Our long-term goal is to create a comprehensive Smart City ecosystem with IoE technology integration',
      ioeCameras: 'IoE Cameras',
      ioeCamerasDesc: 'We plan to install a network of Internet of Everything (IoE) cameras throughout the city. These devices will collect data on traffic, air quality, noise levels, and other urban environment parameters in real time.',
      realTimeMonitoring: 'Real-time monitoring',
      globalSensorNetwork: 'Global sensor network',
      connectivity: '5G/6G connectivity',
      serverInfrastructure: 'Server Infrastructure',
      serverDesc: 'Powerful server infrastructure will process terabytes of data from IoE devices, providing fast analytics and decision-making for optimizing urban processes.',
      cloudInfrastructure: 'Cloud infrastructure',
      bigDataAnalytics: 'Big Data analytics',
      realTimeAI: 'Real-time AI processing',
      smartCityVision: 'Smart City Vision',
      visionDesc: 'EcoCity will become the foundation for creating a comprehensive smart city ecosystem, where AI, IoE technologies and gamification will unite to create a more sustainable, efficient and comfortable urban environment for all residents.',
      cameras: 'Cameras',
      aiAnalysis: 'AI Analysis',
      data: 'Data',
      network: 'Network',
      serverArchitecture: 'Server Architecture',
      dataProcessing: 'Data Processing',
      responseTime: 'Response Time'
    },
    ru: {
      title: 'Будущее EcoCity',
      subtitle: 'Наша долгосрочная цель - создать комплексную экосистему Умного Города с интеграцией IoE технологий',
      ioeCameras: 'IoE Камеры',
      ioeCamerasDesc: 'Мы планируем установить сеть камер Интернета Всего (IoE) по всему городу. Эти устройства будут собирать данные о трафике, качестве воздуха, уровне шума и других параметрах городской среды в реальном времени.',
      realTimeMonitoring: 'Мониторинг в реальном времени',
      globalSensorNetwork: 'Глобальная сеть датчиков',
      connectivity: '5G/6G подключение',
      serverInfrastructure: 'Серверная Инфраструктура',
      serverDesc: 'Мощная серверная инфраструктура будет обрабатывать терабайты данных с IoE устройств, обеспечивая быструю аналитику и принятие решений для оптимизации городских процессов.',
      cloudInfrastructure: 'Облачная инфраструктура',
      bigDataAnalytics: 'Аналитика больших данных',
      realTimeAI: 'ИИ обработка в реальном времени',
      smartCityVision: 'Видение Умного Города',
      visionDesc: 'EcoCity станет основой для создания комплексной экосистемы умного города, где ИИ, IoE технологии и геймификация объединятся для создания более устойчивой, эффективной и комфортной городской среды для всех жителей.',
      cameras: 'Камеры',
      aiAnalysis: 'ИИ Анализ',
      data: 'Данные',
      network: 'Сеть',
      serverArchitecture: 'Архитектура Сервера',
      dataProcessing: 'Обработка Данных',
      responseTime: 'Время Отклика'
    }
  };

  return (
    <section id="future" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-green-900 text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              {texts[language].title}
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {texts[language].subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold mb-6 text-cyan-400">{texts[language].ioeCameras}</h3>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              {texts[language].ioeCamerasDesc}
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Camera className="w-6 h-6 text-cyan-400" />
                <span>{texts[language].realTimeMonitoring}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-6 h-6 text-cyan-400" />
                <span>{texts[language].globalSensorNetwork}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Wifi className="w-6 h-6 text-cyan-400" />
                <span>{texts[language].connectivity}</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-cyan-500/20 rounded-lg p-4 text-center">
                  <Camera className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                  <p className="text-sm">{texts[language].cameras}</p>
                </div>
                <div className="bg-green-500/20 rounded-lg p-4 text-center">
                  <Cpu className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <p className="text-sm">{texts[language].aiAnalysis}</p>
                </div>
                <div className="bg-blue-500/20 rounded-lg p-4 text-center">
                  <Database className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <p className="text-sm">{texts[language].data}</p>
                </div>
                <div className="bg-purple-500/20 rounded-lg p-4 text-center">
                  <Globe className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <p className="text-sm">{texts[language].network}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <div className="text-center mb-6">
                <Server className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h4 className="text-xl font-bold">{texts[language].serverArchitecture}</h4>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>{texts[language].dataProcessing}</span>
                  <span className="text-green-400">99.9%</span>
                </div>
                <div className="flex justify-between">
                  <span>{texts[language].responseTime}</span>
                  <span className="text-cyan-400">&lt;100мс</span>
                </div>
                <div className="flex justify-between">
                  <span>Scalability</span>
                  <span className="text-purple-400">∞</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h3 className="text-3xl font-bold mb-6 text-green-400">{texts[language].serverInfrastructure}</h3>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              {texts[language].serverDesc}
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Server className="w-6 h-6 text-green-400" />
                <span>{texts[language].cloudInfrastructure}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Database className="w-6 h-6 text-green-400" />
                <span>{texts[language].bigDataAnalytics}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Cpu className="w-6 h-6 text-green-400" />
                <span>{texts[language].realTimeAI}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
            <h4 className="text-2xl font-bold mb-4 text-yellow-400">{texts[language].smartCityVision}</h4>
            <p className="text-gray-300 text-lg leading-relaxed">
              {texts[language].visionDesc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Future;