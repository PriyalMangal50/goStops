import { useState } from 'react';

export default function NavigationTabs() {
  const [activeTab, setActiveTab] = useState('Rooms');
  const tabs = ['Rooms', 'Amenities', 'Location', 'Guidelines'];

  return (
    <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-4 text-sm font-medium transition-colors relative ${
                activeTab === tab
                  ? 'text-gray-900'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5"
                  style={{ backgroundColor: '#ff1a53' }}
                ></div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}