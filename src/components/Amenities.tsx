import { Wifi, Wind, Home, Droplets, Users, Building, Shirt } from 'lucide-react';

export default function Amenities() {
  const amenities = [
    { icon: Wifi, label: '24/7 Front Desk' },
    { icon: Droplets, label: 'Ensuite Washroom' },
    { icon: Home, label: 'Home Theatre' },
    { icon: Wind, label: 'AC' },
    { icon: Wind, label: 'Fan' },
    { icon: Users, label: 'Common Area' },
    { icon: Users, label: 'Geyser' },
    { icon: Shirt, label: 'Laundry' },
    { icon: Building, label: 'Indoor Games' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Amenities you'll get</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
        {amenities.map((amenity, idx) => (
          <div key={idx} className="flex items-center space-x-3">
            <amenity.icon size={20} className="text-gray-600" />
            <span className="text-gray-700">{amenity.label}</span>
          </div>
        ))}
      </div>
      <button className="text-pink-500 hover:underline text-sm font-semibold">
        View all amenities
      </button>
    </div>
  );
}