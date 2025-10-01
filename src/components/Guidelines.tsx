import { Clock } from 'lucide-react';

export default function Guidelines() {
  const guidelines = [
    'All guests must carry a Govt. photo ID (PAN card not accepted).',
    'Local IDs are not accepted.',
    'Non-resident visitors are not allowed beyond the reception/common areas.',
    'Cancellations/Modifications: Free up to 5 days (120 hours) before the standard check in time.',
    'No shows are charged 100% of the reservation.',
    'No refunds for early departures.'
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 border-t border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Guidelines</h2>

      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <div className="flex items-center space-x-3 bg-gray-50 px-4 py-3 rounded-lg">
          <Clock size={20} className="text-gray-600" />
          <div>
            <span className="text-sm text-gray-600">Check in:</span>
            <span className="ml-2 font-semibold text-gray-900">1:00 PM</span>
          </div>
        </div>
        <div className="flex items-center space-x-3 bg-gray-50 px-4 py-3 rounded-lg">
          <Clock size={20} className="text-gray-600" />
          <div>
            <span className="text-sm text-gray-600">Check out:</span>
            <span className="ml-2 font-semibold text-gray-900">10:00 AM</span>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {guidelines.map((guideline, idx) => (
          <div key={idx} className="flex items-start space-x-3">
            <div className="mt-1 w-1.5 h-1.5 rounded-full bg-pink-500 flex-shrink-0"></div>
            <p className="text-sm text-gray-700">{guideline}</p>
          </div>
        ))}
      </div>

      <button className="mt-4 text-pink-500 hover:underline text-sm font-semibold">
        View all guidelines
      </button>
    </div>
  );
}