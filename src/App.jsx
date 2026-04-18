import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InputArea from './components/InputArea';
import Sidebar from './components/Sidebar';
import MainDisplay from './components/MainDisplay';
import HistoryGallery from './components/HistoryGallery';

function App() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [history, setHistory] = useState([]);
  const [config, setConfig] = useState({
    ratio: 'Square (1:1)',
    style: 'Cinematic'
  });

  const handleGenerate = async (prompt) => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    
    // Simulate API call to DALL-E or Hugging Face
    try {
      await new Promise(resolve => setTimeout(resolve, 2500)); // Simulate network delay
      
      // In a real app, you would make a fetch call here:
      // const response = await fetch('https://api.openai.com/v1/images/generations', { ... });
      // const data = await response.json();
      
      // For demonstration, we use a placeholder image service that generates random images based on seed
      const seed = Math.floor(Math.random() * 1000000);
      const width = config.ratio === 'Landscape (16:9)' ? 800 : config.ratio === 'Portrait (9:16)' ? 450 : 600;
      const height = config.ratio === 'Landscape (16:9)' ? 450 : config.ratio === 'Portrait (9:16)' ? 800 : 600;
      
      const newImage = {
        id: Date.now(),
        url: `https://picsum.photos/seed/${seed}/${width}/${height}`,
        prompt: `[${config.style}] ${prompt}`,
        config: { ...config }
      };

      setCurrentImage(newImage);
      setHistory(prev => [newImage, ...prev].slice(0, 12)); // Keep last 12
    } catch (error) {
      console.error("Failed to generate image:", error);
      alert("Failed to generate image. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleHistorySelect = (item) => {
    setCurrentImage(item);
  };

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden selection:bg-accent/30 selection:text-white">
      {/* Background decorations */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/20 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent/20 blur-[120px]"></div>
      </div>

      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-8">
        <Hero />
        
        <div className="w-full z-10">
          <InputArea onGenerate={handleGenerate} isGenerating={isGenerating} />
        </div>

        <div className="flex flex-col lg:flex-row gap-6 mt-4">
          <Sidebar config={config} setConfig={setConfig} />
          <MainDisplay currentImage={currentImage} isGenerating={isGenerating} />
        </div>

        <HistoryGallery history={history} onSelect={handleHistorySelect} />
      </main>
    </div>
  );
}

export default App;
