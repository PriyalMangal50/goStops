import { Calendar, Users } from 'lucide-react';
import { useState } from 'react';

interface DatePickerProps {
  checkIn: string;
  checkOut: string;
  guests: number;
}

export default function DatePicker({ checkIn, checkOut, guests }: DatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    return `${day} ${month}`;
  };

  const calculateNights = () => {
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diff = end.getTime() - start.getTime();
    return Math.ceil(diff / (1000 * 3600 * 24));
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4">
      <div className="grid grid-cols-3 gap-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col items-start p-3 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
        >
          <div className="flex items-center space-x-2 text-gray-500 text-xs mb-1">
            <Calendar size={14} />
            <span>Check in</span>
          </div>
          <div className="text-sm font-semibold text-gray-900">{formatDate(checkIn)}</div>
        </button>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col items-start p-3 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
        >
          <div className="flex items-center space-x-2 text-gray-500 text-xs mb-1">
            <Calendar size={14} />
            <span>Check out</span>
          </div>
          <div className="text-sm font-semibold text-gray-900">{formatDate(checkOut)}</div>
        </button>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col items-start p-3 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
        >
          <div className="flex items-center space-x-2 text-gray-500 text-xs mb-1">
            <Users size={14} />
            <span>Guests</span>
          </div>
          <div className="text-sm font-semibold text-gray-900">{guests} guest{guests !== 1 ? 's' : ''}</div>
        </button>
      </div>
      <div className="mt-2 text-xs text-gray-500 text-center">
        {calculateNights()} night{calculateNights() !== 1 ? 's' : ''}
      </div>
    </div>
  );
}