import React from 'react';
import { Brain, Users, Target, Zap, Network, Shield } from 'lucide-react';

interface FeaturesProps {
  language: 'en' | 'ru';
}

const Features: React.FC<FeaturesProps> = ({ language }) => {
  const texts = {
    en: {
      title: 'MVP Features',
      subtitle: 'The current version of EcoCity demonstrates key technologies that will become the foundation for a comprehensive Smart City platform',
      features: [
        {
          title: "AI with Gamification",
          description: "Our artificial intelligence system learns through game mechanics, making the interaction process intuitive and engaging for users."
        },
        {
          title: "Citizen Engagement",
          description: "Gamification motivates residents to actively participate in city development, earning points and achievements for eco-friendly behavior."
        },
        {
          title: "Precise Analytics",
          description: "AI analyzes behavioral patterns and provides accurate recommendations for improving the urban environment."
        },
        {
          title: "Fast Adaptation",
          description: "The system quickly adapts to changes in the urban environment through continuous machine learning."
        },
        {
          title: "IoE Integration",
          description: "Preparation for integration with IoE camera network to create a comprehensive smart city ecosystem."
        },
        {
          title: "Data Security",
          description: "All data is processed in compliance with the highest security and privacy standards."
        }
      ]
    },
    ru: {
      title: 'Возможности MVP',
      subtitle: 'Текущая версия EcoCity демонстрирует ключевые технологии, которые станут основой для комплексной платформы Умного Города',
      features: [
        {
          title: "ИИ с Геймификацией",
          description: "Наша система искусственного интеллекта обучается через игровые механики, делая процесс взаимодействия интуитивным и увлекательным для пользователей."
        },
        {
          title: "Вовлечение Граждан",
          description: "Геймификация мотивирует жителей активно участвовать в развитии города, зарабатывая очки и достижения за экологичное поведение."
        },
        {
          title: "Точная Аналитика",
          description: "ИИ анализирует поведенческие паттерны и предоставляет точные рекомендации для улучшения городской среды."
        },
        {
          title: "Быстрая Адаптация",
          description: "Система быстро адаптируется к изменениям в городской среде через непрерывное машинное обучение."
        },
        {
          title: "Интеграция IoE",
          description: "Подготовка к интеграции с сетью IoE камер для создания комплексной экосистемы умного города."
        },
        {
          title: "Безопасность Данных",
          description: "Все данные обрабатываются в соответствии с высочайшими стандартами безопасности и конфиденциальности."
        }
      ]
    }
  };

  const features = [
    {
      icon: Brain,
      title: texts[language].features[0].title,
      description: texts[language].features[0].description,
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: texts[language].features[1].title,
      description: texts[language].features[1].description,
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Target,
      title: texts[language].features[2].title,
      description: texts[language].features[2].description,
      color: "from-green-500 to-teal-500"
    },
    {
      icon: Zap,
      title: texts[language].features[3].title,
      description: texts[language].features[3].description,
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Network,
      title: texts[language].features[4].title,
      description: texts[language].features[4].description,
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Shield,
      title: texts[language].features[5].title,
      description: texts[language].features[5].description,
      color: "from-red-500 to-pink-500"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              {texts[language].title}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {texts[language].subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/80 transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full">
                <div className="relative mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity`}></div>
                  <div className={`relative w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;