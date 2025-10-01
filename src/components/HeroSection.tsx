import { MapPin, Award, Image as ImageIcon, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

interface HeroSectionProps {
  onGalleryClick: () => void;
}

export default function HeroSection({ onGalleryClick }: HeroSectionProps) {
  const [bedCount, setBedCount] = useState(1);

  const handleIncrementBeds = () => {
    setBedCount(prev => prev + 1);
  };

  const handleDecrementBeds = () => {
    setBedCount(prev => Math.max(1, prev - 1));
  };
  return (
    <div className="max-w-7xl mx-auto px-4 py-6 pt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4" style={{ minHeight: '600px' }}>
        <div className="relative h-[600px] md:h-auto rounded-lg overflow-hidden">
          <div className="absolute top-4 left-4 bg-yellow-400 text-black px-3 py-1 rounded text-sm font-semibold">
            Trusted by 200+ Users
          </div>
          <img
            src="/images/103_Reception_01_sTjS43W.webp"
            alt="Hostel exterior"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = '/api/placeholder/600/400';
            }}
          />
          <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
            <span className="text-orange-500">★</span>
            <span>4.9/5</span>
            <span className="text-gray-500">(1.6k)</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-lg overflow-hidden" style={{ height: '290px' }}>
            <img
              src="/src/assets/images/room-1.jpg"
              alt="Hostel interior 1"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = '/api/placeholder/300/200';
              }}
            />
          </div>
          <div className="rounded-lg overflow-hidden" style={{ height: '290px' }}>
            <img
              src="/images/103_Reception_01_sTjS43W.webp"
              alt="Hostel interior 2"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = '/api/placeholder/300/200';
              }}
            />
          </div>
          <div className="rounded-lg overflow-hidden" style={{ height: '290px' }}>
            <img
              src="/images/103_Reception_01_sTjS43W.webp"
              alt="Hostel interior 3"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = '/api/placeholder/300/200';
              }}
            />
          </div>
          <div className="rounded-lg overflow-hidden relative" style={{ height: '290px' }}>
            <img
              src="/src/assets/images/room-4.jpg"
              alt="Hostel interior 4"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = '/api/placeholder/300/200';
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <button
                onClick={onGalleryClick}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300 transition-colors text-sm font-medium"
              >
                <ImageIcon size={16} />
                <span>Gallery</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mt-6 pb-6 border-b border-gray-200">
        <div className="flex-1">
          <h1 className="text-3xl font-semibold text-gray-900">Bengaluru, HSR Silk Board</h1>
          <div className="flex items-start text-gray-600 mt-2">
            <MapPin size={16} className="mr-1 mt-1 flex-shrink-0" />
            <span className="text-sm">754/L-185, HSR Layout, Sector 6, behind Silkboard bus stand, Outer Ring road, Bengaluru - 560102</span>
          </div>
          <div className="flex flex-wrap gap-3 mt-4">
            <div className="flex items-center space-x-2 text-sm" style={{ color: '#ff1a53' }}>
              <Award size={16} />
              <span>Booked by 200+ this week</span>
            </div>
            <div className="flex items-center space-x-2 text-sm" style={{ color: '#ff1a53' }}>
              <Award size={16} />
              <span>Perfect for Stay Near HSR Startup Scene</span>
            </div>
          </div>
          <p className="mt-4 text-gray-700 text-sm leading-relaxed">
            Nestled in HSR layout near Silk Board Junction, goSTOPS Bengaluru HSR offers convenient access to Bengaluru's tech parks, dining,
            shopping, and nightlife, making it a perfect spot for explorers looking to experience the city's dynamic culture and modern vibes.
          </p>
        </div>

        <div className="flex flex-col items-end md:items-end">
          <div className="text-right">
            <div className="text-sm text-gray-500 mb-1">Starting from</div>
            <div className="text-3xl font-bold text-gray-900">₹525.96</div>
          </div>
          
          {/* Bed Selection Controls */}
          <div className="flex items-center gap-3 mt-3">
            <span className="text-sm text-gray-600">Beds:</span>
            <div className="flex items-center border border-gray-300 rounded-lg">
              <button
                onClick={handleDecrementBeds}
                disabled={bedCount <= 1}
                className="flex items-center justify-center w-8 h-8 text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed rounded-l-lg"
              >
                <Minus size={16} />
              </button>
              <span className="flex items-center justify-center w-12 h-8 text-sm font-medium bg-gray-50">
                {bedCount}
              </span>
              <button
                onClick={handleIncrementBeds}
                className="flex items-center justify-center w-8 h-8 text-gray-600 hover:bg-gray-100 rounded-r-lg"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>
          
          <button className="mt-3 px-8 py-3 text-white rounded-lg font-semibold hover:opacity-90 whitespace-nowrap" style={{ backgroundColor: '#ff1a53' }}>
            Select Room
          </button>
        </div>
      </div>
    </div>
  );
}