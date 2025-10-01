import { ArrowLeft } from 'lucide-react';

interface GalleryProps {
  onClose: () => void;
}

export default function Gallery({ onClose }: GalleryProps) {
  const roomCategories = [
    {
      title: 'Bed in 4 Bed Mixed AC Dormitory Room with Ensuite Bathroom',
      images: ['/api/placeholder/200/150', '/api/placeholder/200/150']
    },
    {
      title: 'Deluxe Private AC Room with Ensuite Bathroom',
      images: ['/api/placeholder/200/150', '/api/placeholder/200/150']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gray-100 border-b border-gray-200 px-4 py-4 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto flex items-center">
          <button
            onClick={onClose}
            className="flex items-center space-x-2 text-gray-700 hover:text-gray-900"
          >
            <ArrowLeft size={20} />
          </button>
          <span className="ml-4 font-semibold text-gray-900">Gallery</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex space-x-4 mb-6 overflow-x-auto pb-2">
          {roomCategories.map((category, idx) => (
            <div key={idx} className="flex-shrink-0">
              <div className="w-32 h-24 rounded-lg overflow-hidden border-2 border-gray-300 hover:border-gray-400 cursor-pointer">
                <img src={category.images[0]} alt={category.title} className="w-full h-full object-cover" />
              </div>
              <p className="text-xs text-gray-700 mt-1 w-32 truncate">{category.title}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-orange-100 to-yellow-50 rounded-lg p-8">
            <img
              src="/api/placeholder/600/400"
              alt="Large room view"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              Bed in 4 Bed Mixed AC Dormitory Room with Ensuite Bathroom
            </h2>
            <div className="space-y-2 text-sm text-gray-700">
              <p>Laundry (Subject to Availability)</p>
              <p>Shared or Ensuite Bathroom (As per room category reserved)</p>
              <p>Air Conditioned</p>
              <p>Free Breakfast (As per rate received)</p>
              <p>Vehicle on Hire (Extra Charges)</p>
              <p>Power Backup</p>
              <p>Pets Allowed (1 Pet Person in Private Rooms Only)</p>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Room types & Pricing</h2>
          <div className="space-y-4">
            {roomCategories.map((category, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg p-4 bg-white">
                <h3 className="font-semibold text-gray-900">{category.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}