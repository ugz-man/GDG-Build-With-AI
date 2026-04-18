import React from 'react';

const HistoryGallery = ({ history, onSelect }) => {
  if (history.length === 0) return null;

  return (
    <div className="mt-12">
      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
        <span className="bg-accent/20 text-accent px-2 py-1 rounded text-sm">Recent</span>
        Generations
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {history.map((item, index) => (
          <div 
            key={index} 
            className="glass-panel p-1 rounded-lg cursor-pointer overflow-hidden group aspect-square"
            onClick={() => onSelect(item)}
          >
            <img 
              src={item.url} 
              alt={item.prompt} 
              className="w-full h-full object-cover rounded-md group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryGallery;
