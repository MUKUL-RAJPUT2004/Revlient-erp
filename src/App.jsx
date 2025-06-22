import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-900 transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <div className="fixed bottom-6 right-6 p-4 bg-primary-600 text-white rounded-full cursor-pointer hover:bg-primary-700 transition-colors">
        ?
        </div>
      </main>
    </div>
  );
}

export default App;