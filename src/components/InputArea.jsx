import React, { useState } from 'react';
import { Wand2, Loader2 } from 'lucide-react';

const InputArea = ({ onGenerate, isGenerating }) => {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (prompt.trim()) {
      onGenerate(prompt);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-4xl mx-auto relative group">
      <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="glass-panel p-2 flex items-center gap-2 relative z-10 rounded-full">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe what you want to see... e.g. 'A futuristic city at sunset, cyberpunk style'"
          className="bg-transparent border-none focus:ring-0 flex-grow px-6 py-3 text-white placeholder-gray-500 outline-none w-full"
          disabled={isGenerating}
        />
        <button
          type="submit"
          disabled={isGenerating || !prompt.trim()}
          className="btn-primary rounded-full px-8 py-3 whitespace-nowrap"
        >
          {isGenerating ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Wand2 className="w-5 h-5 mr-2" />
              Generate
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default InputArea;
