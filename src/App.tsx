import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Future from './components/Future';
import Footer from './components/Footer';

function App() {
  const [language, setLanguage] = useState<'en' | 'ru'>('en');

  return (
    <div className="min-h-screen">
      <Header language={language} onLanguageChange={setLanguage} />
      <Hero language={language} />
      <Features language={language} />
      <Future language={language} />
      <Footer language={language} />
    </div>
  );
}

export default App;