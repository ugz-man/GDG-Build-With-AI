import React from 'react';
import { Download, Share2, Image as ImageIcon } from 'lucide-react';

const MainDisplay = ({ currentImage, isGenerating }) => {
  return (
    <div className="glass-panel p-4 flex-grow flex flex-col min-h-[400px] lg:min-h-[600px] relative overflow-hidden">
      {isGenerating ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm z-10">
          <div className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-accent font-medium animate-pulse">Materializing pixels...</p>
        </div>
      ) : null}

      <div className="flex-grow flex items-center justify-center bg-black/20 rounded-lg overflow-hidden relative group">
        {currentImage ? (
          <>
            <img
              src={currentImage.url}
              alt={currentImage.prompt}
              className="w-full h-full object-contain animate-in fade-in duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex justify-between items-end">
              <p className="text-white text-sm line-clamp-2 max-w-[80%] drop-shadow-md">
                {currentImage.prompt}
              </p>
              <div className="flex gap-2">
                <button className="p-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-lg text-white transition-colors" title="Share">
                  <Share2 className="w-4 h-4" />
                </button>
                <button className="p-2 bg-accent hover:bg-sky-400 text-white rounded-lg transition-colors" title="Download">
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center text-gray-500">
            <ImageIcon className="w-16 h-16 mb-4 opacity-20" />
            <p>Your generation will appear here</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainDisplay;
