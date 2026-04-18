import React from 'react';
import { Sparkles, Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="glass-panel sticky top-0 z-50 rounded-none border-t-0 border-l-0 border-r-0 border-b border-white/10 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="w-8 h-8 text-accent" />
          <span className="text-xl font-bold tracking-tight text-white">NeuroGen<span className="text-accent">AI</span></span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-300">
          <a href="#" className="hover:text-accent transition-colors">Gallery</a>
          <a href="#" className="hover:text-accent transition-colors">Pricing</a>
          <a href="#" className="hover:text-accent transition-colors">API</a>
          <button className="btn-primary py-1.5 px-4 text-sm">Sign In</button>
        </div>
        <button className="md:hidden text-gray-300 hover:text-white">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
