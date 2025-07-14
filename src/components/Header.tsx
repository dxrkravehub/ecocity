import React, { useState } from 'react';
import { Leaf, Globe } from 'lucide-react';

interface HeaderProps {
  language: 'en' | 'ru';
  onLanguageChange: (lang: 'en' | 'ru') => void;
}

const Header: React.FC<HeaderProps> = ({ language, onLanguageChange }) => {
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const texts = {
    en: {
      features: 'Features',
      future: 'Future',
      contact: 'Contact'
    },
    ru: {
      features: 'Возможности',
      future: 'Будущее',
      contact: 'Контакты'
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/10 border-b border-white/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur-sm opacity-75"></div>
              <div className="relative bg-white/20 backdrop-blur-sm rounded-full p-2 border border-white/30">
                <Leaf className="w-8 h-8 text-green-600" />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                EcoCity
              </h1>
              <p className="text-xs text-gray-600 font-medium">MVP</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              {texts[language].features}
            </a>
            <a href="#future" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              {texts[language].future}
            </a>
            <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              {texts[language].contact}
            </a>
            
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center space-x-2 text-gray-700 hover:text-green-600 transition-colors font-medium"
              >
                <Globe className="w-4 h-4" />
                <span>{language.toUpperCase()}</span>
              </button>
              
              {isLangMenuOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white/90 backdrop-blur-md rounded-lg shadow-lg border border-white/20 py-2 min-w-[80px]">
                  <button
                    onClick={() => {
                      onLanguageChange('en');
                      setIsLangMenuOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm hover:bg-green-100 transition-colors ${
                      language === 'en' ? 'text-green-600 font-medium' : 'text-gray-700'
                    }`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => {
                      onLanguageChange('ru');
                      setIsLangMenuOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm hover:bg-green-100 transition-colors ${
                      language === 'ru' ? 'text-green-600 font-medium' : 'text-gray-700'
                    }`}
                  >
                    RU
                  </button>
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;