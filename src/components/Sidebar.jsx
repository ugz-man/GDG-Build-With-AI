import React from 'react';

const Sidebar = ({ config, setConfig }) => {
  const styles = ['Cinematic', 'Anime', 'Digital Art', 'Photographic', 'Fantasy', 'Cyberpunk'];
  const ratios = ['Square (1:1)', 'Landscape (16:9)', 'Portrait (9:16)'];

  return (
    <div className="glass-panel p-6 w-full lg:w-64 flex-shrink-0 flex flex-col gap-6">
      <div>
        <h3 className="text-lg font-semibold text-white mb-3">Settings</h3>
        <div className="h-px bg-white/10 w-full mb-4"></div>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-400 mb-2">Aspect Ratio</label>
          <div className="flex flex-col gap-2">
            {ratios.map((ratio) => (
              <button
                key={ratio}
                onClick={() => setConfig({ ...config, ratio })}
                className={`text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                  config.ratio === ratio
                    ? 'bg-accent/20 text-accent border border-accent/30'
                    : 'text-gray-300 hover:bg-white/5 border border-transparent'
                }`}
              >
                {ratio}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Art Style</label>
          <div className="flex flex-wrap gap-2">
            {styles.map((style) => (
              <button
                key={style}
                onClick={() => setConfig({ ...config, style })}
                className={`px-3 py-1.5 rounded-full text-xs transition-colors ${
                  config.style === style
                    ? 'bg-accent text-white'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10'
                }`}
              >
                {style}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
