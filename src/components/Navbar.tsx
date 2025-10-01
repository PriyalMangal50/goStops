import { Download } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="hidden lg:flex fixed top-0 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-full justify-center items-center bg-[rgba(0,0,0,0.40)] border-b border-[rgba(239,239,239,0.40)] backdrop-blur-[26px]">
      <div className="max-w-7xl w-full mx-auto flex items-center justify-between px-6 py-3">
        <div className="flex items-center space-x-12">
          <div className="flex items-center space-x-2 -ml-8">
            <img 
              src="/images/Screenshot (1669).png" 
              alt="goSTOPS Logo" 
              className="h-10 w-30" 
            />
          </div>
          <div className="flex items-center space-x-6 text-sm text-white ml-16">
            <button className="flex items-center space-x-1 hover:opacity-80">
              <span>Destinations</span>
              <span className="text-xs">▼</span>
            </button>
            <a href="#" className="hover:opacity-80">Workation</a>
            <a href="#" className="hover:opacity-80">Coliving</a>
            <button className="flex items-center space-x-1 hover:opacity-80">
              <span>goSTOPS for Business</span>
              <span className="text-xs">▼</span>
            </button>
            <button className="flex items-center space-x-1 hover:opacity-80">
              <span>Collaborate with Us</span>
              <span className="text-xs">▼</span>
            </button>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 px-4 py-2 border border-white/30 rounded-full text-sm hover:border-white/50 text-white bg-white/10">
            <Download size={16} />
            <span>Download App</span>
          </button>
          <button className="px-6 py-2 text-white rounded-full text-sm hover:opacity-90" style={{ backgroundColor: '#ff1a53' }}>
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}