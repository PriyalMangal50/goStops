import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function GettingHere() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const transportOptions = [
    {
      id: 'bus',
      title: 'By Bus',
      icon: '🚌',
      content: 'Kempegowda Bus Station is the nearest bus terminal, located approximately 12 km away. From there, you can take local buses or auto-rickshaws to reach the hostel in HSR Layout.'
    },
    {
      id: 'train',
      title: 'By Train',
      icon: '🚂',
      content: 'Bangalore City Railway Station (also known as Krantivira Sangolli Rayanna Railway Station) is about 13 km from the hostel. You can hire a taxi or use app-based ride services to reach the property.'
    },
    {
      id: 'air',
      title: 'By Air',
      icon: '✈️',
      content: 'Kempegowda International Airport is approximately 45 km away. It takes about 1.5 to 2 hours to reach the hostel by taxi or cab services.'
    },
    {
      id: 'taxi',
      title: 'By Taxi',
      icon: '🚕',
      content: 'App-based cab services like Ola and Uber are readily available throughout Bengaluru. Simply enter the hostel address to reach the property conveniently from anywhere in the city.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 border-t border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Getting Here</h2>
      <p className="text-sm text-gray-600 mb-6">
        754b - 18b, HSR Layout, Sector b, behind Silkboard bus stand, Outer Ring road, Bengaluru - 560102
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
          <span className="text-gray-500">🗺️ Map View</span>
        </div>

        <div className="space-y-3">
          {transportOptions.map((option) => (
            <div key={option.id} className="border border-gray-200 rounded-lg bg-white overflow-hidden">
              <button
                onClick={() => setOpenSection(openSection === option.id ? null : option.id)}
                className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-pink-500 text-xl">{option.icon}</span>
                  <span className="font-semibold text-gray-900">{option.title}</span>
                </div>
                <ChevronDown
                  size={20}
                  className={`text-gray-400 transition-transform ${openSection === option.id ? 'rotate-180' : ''}`}
                />
              </button>
              {openSection === option.id && (
                <div className="px-4 pb-4 pt-2 text-sm text-gray-700 border-t border-gray-100">
                  {option.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}