import React from 'react';
import Quiz from './components/Quiz';
import Analytics from './components/Analytics';

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">TrivIQ</h1>
      <Quiz />
      <Analytics />
    </div>
  );
}

export default App;
