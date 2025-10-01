import { Users, ChevronDown, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

interface RoomCardProps {
  title: string;
  price: number;
  originalPrice: number;
  maxAdults: number;
  image: string;
  amenities: string[];
  onAddRoom: (room: { title: string; price: number; nights: number; quantity: number }) => void;
  checkIn: string;
  checkOut: string;
  imageCount?: number;
}

export default function RoomCard({
  title,
  price,
  originalPrice,
  maxAdults,
  image,
  amenities,
  onAddRoom,
  checkIn,
  checkOut,
  imageCount = 8
}: RoomCardProps) {
  const [showCalendar, setShowCalendar] = useState(false);
  const [includeBreakfast, setIncludeBreakfast] = useState(false);
  const [showMoreAmenities, setShowMoreAmenities] = useState(false);
  const [bedCount, setBedCount] = useState(1);
  const [showBedControls, setShowBedControls] = useState(false);

  const handleIncrementBeds = () => {
    const newCount = bedCount + 1;
    setBedCount(newCount);
    // Update summary immediately
    onAddRoom({ title, price, nights, quantity: newCount });
  };

  const handleDecrementBeds = () => {
    const newCount = Math.max(1, bedCount - 1);
    setBedCount(newCount);
    // Update summary immediately
    onAddRoom({ title, price, nights, quantity: newCount });
  };

  const handleAddRoom = () => {
    if (!showBedControls) {
      // First click: show controls AND add 1 bed to summary
      setShowBedControls(true);
      onAddRoom({ title, price, nights, quantity: 1 });
    } else {
      // This shouldn't be called since we'll handle updates via +/- buttons
      onAddRoom({ title, price, nights, quantity: bedCount });
    }
  };

  const calculateNights = () => {
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diff = end.getTime() - start.getTime();
    return Math.ceil(diff / (1000 * 3600 * 24));
  };

  const nights = calculateNights();

  const availabilityData = [
    { day: 'Wed, 5 Nov', price: 637.74, units: 100 },
    { day: 'Thu, 6 Nov', price: 633.15, units: 100 },
    { day: 'Fri, 7 Nov', price: 626.42, units: 85 },
    { day: 'Sat, 8 Nov', price: 616.84, units: 50 },
    { day: 'Sun, 9 Nov', price: 613.2, units: 62 },
    { day: 'Mon, 10 Nov', price: 625.52, units: 100 },
    { day: 'Tue, 11 Nov', price: 631.53, units: 100 }
  ];

  return (
    <div className="mb-6 md:grid md:grid-cols-12 gap-3 rounded-xl border border-white bg-white shadow-[2px_-2px_23px_4px_rgba(70,69,70,0.10)]">
      <div className="md:col-span-4 relative">
        <div className="relative h-full">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-[8px] md:rounded-l-[12px] md:rounded-r-none cursor-pointer"
            style={{ minHeight: '250px' }}
            onError={(e) => {
              e.currentTarget.src = '/api/placeholder/400/300';
            }}
          />
          <div className="absolute bottom-2 right-2 inline-flex items-center gap-1 rounded-[12px] bg-white/90 shadow-[0_4px_8px_0_rgba(70,69,70,0.25)] px-2 py-1">
            <span className="text-[#2A2929] font-semibold text-[14px] leading-[19px]">
              1/{imageCount}
            </span>
          </div>
        </div>
      </div>

      <div className="pt-3 px-3 md:col-span-8 bg-[linear-gradient(113deg,rgba(255,226,231,0)_79.26%,rgba(255,226,231,0.60)_100%)] rounded-[8px] md:rounded-[12px]">
        <div className="grid grid-cols-12">
          <div className="col-span-8 md:col-span-9 flex flex-col">
            <div className="flex items-center gap-2">
              <h3 className="text-[14px] leading-[19px] md:text-[16px] font-bold text-grey-900 md:leading-[22px]">
                {title}
              </h3>
            </div>
            <div className="flex items-center gap-1 text-grey-500 mt-[8px] md:mt-[9px]">
              <Users size={16} className="text-[#636162]" />
              <span className="text-[11px] md:text-[12px] leading-[15px] md:leading-[17px] font-medium">
                x {maxAdults} Adult{maxAdults > 1 ? 's' : ''}
              </span>
            </div>
          </div>

          <div className="col-span-4 md:col-span-3 ml-auto">
            <div className="mb-1 text-right">
              <p className="text-2xl text-[19px] leading-[27px] md:text-[23px] md:leading-[28px] font-bold text-gray-900">
                ₹{price.toFixed(2)}
              </p>
              <p className="text-[12px] leading-[17px]">
                <span className="text-grey-500 line-through">₹{originalPrice}</span>
                <span className="text-grey-300">/night</span>
              </p>
            </div>
            <div className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" width="107" height="21" viewBox="0 0 107 21" fill="none">
                <path d="M3.82772 0C0.868561 0 -0.455269 3.71288 1.83636 5.58506L18.9667 19.58C20.0909 20.4983 21.4978 21 22.9494 21H100.705C104.182 21 107 18.1816 107 14.7049V6.29508C107 2.8184 104.182 0 100.705 0H3.82772Z" fill="url(#paint0_linear_883_2565)" />
                <defs>
                  <linearGradient id="paint0_linear_883_2565" x1="107" y1="10.5" x2="-5" y2="10.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#C7FD8F" />
                    <stop offset="0.639423" stopColor="#EDFD8F" stopOpacity="0.8" />
                    <stop offset="0.990385" stopColor="#EDFD8F" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-[#008000] text-[11px] leading-[15px] font-bold ml-[10px]">
                'GO10' Applied
              </span>
            </div>
          </div>
        </div>

        <div className="my-5 md:my-4">
          <div className="flex flex-wrap gap-2">
            <span className="bg-[#F5F5F5] text-grey-500 px-2 py-1 rounded-full text-xs flex items-center gap-2">
              Laundry (Subject to Availability)
            </span>
            {amenities.slice(0, showMoreAmenities ? amenities.length : 4).map((amenity, idx) => (
              <span key={idx} className="bg-[#F5F5F5] text-grey-500 px-2 py-1 rounded-full text-xs flex items-center gap-2">
                {amenity}
              </span>
            ))}
            {amenities.length > 4 && (
              <button
                onClick={() => setShowMoreAmenities(!showMoreAmenities)}
                className="text-grey-900 text-xs font-bold flex items-center gap-1"
              >
                +{amenities.length - 4} more
                <ChevronDown size={12} className={`transition-transform ${showMoreAmenities ? 'rotate-180' : ''}`} />
              </button>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 mb-3 md:mb-2 md:justify-end min-h-[20px]">
          <button
            className="flex items-center gap-2 w-fit"
            onClick={() => setIncludeBreakfast(!includeBreakfast)}
          >
            <div className="w-5 md:w-6 h-5 md:h-6 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path
                  d="M1 11C1 6.28595 1 3.92893 2.46447 2.46447C3.92893 1 6.28595 1 11 1C15.714 1 18.0711 1 19.5355 2.46447C21 3.92893 21 6.28595 21 11C21 15.714 21 18.0711 19.5355 19.5355C18.0711 21 15.714 21 11 21C6.28595 21 3.92893 21 2.46447 19.5355C1 18.0711 1 15.714 1 11Z"
                  fill={includeBreakfast ? '#ff1a53' : 'white'}
                  stroke="#B7B6B7"
                  strokeWidth="1.5"
                />
                {includeBreakfast && (
                  <path d="M7 11L10 14L15 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                )}
              </svg>
            </div>
            <span className="text-sm leading-[19px] text-grey-700">Include Breakfast</span>
          </button>
        </div>

        <div className="flex justify-between items-center py-[8px] md:py-[12px] border-t-[0.75px] border-t-[#CFCECE]">
          <div className="flex items-center h-[32px]">
            <button
              onClick={() => setShowCalendar(!showCalendar)}
              className="text-[14px] leading-[19px] font-bold flex items-center gap-1 hover:underline"
              style={{ color: '#ff1a53' }}
            >
              Availability calendar
              <ChevronDown size={16} className={`transition-transform ${showCalendar ? 'rotate-180' : ''}`} />
            </button>
          </div>
          <div className="flex items-center gap-3 h-[32px]">
            {showBedControls ? (
              /* Bed Quantity Selector */
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Beds:</span>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={handleDecrementBeds}
                    disabled={bedCount <= 1}
                    className="flex items-center justify-center w-7 h-7 text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed rounded-l-lg"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="flex items-center justify-center w-10 h-7 text-sm font-medium bg-gray-50">
                    {bedCount}
                  </span>
                  <button
                    onClick={handleIncrementBeds}
                    className="flex items-center justify-center w-7 h-7 text-gray-600 hover:bg-gray-100 rounded-r-lg"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={handleAddRoom}
                className="flex items-center justify-center gap-2 rounded-[12px] border border-[rgba(255,51,102,0.10)] px-3 py-2 shadow-[0_2px_8px_0_rgba(0,0,0,0.10)] text-[14px] text-white h-[32px] bg-[linear-gradient(99deg,#F36_8.96%,#FF1A53_99.91%)]"
              >
                Add Bed
              </button>
            )}
          </div>
        </div>

        {showCalendar && (
          <div className="mb-3 overflow-x-auto">
            <div className="flex space-x-3 pb-2">
              {availabilityData.map((day, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 border border-gray-200 rounded-lg p-2 text-center bg-white hover:border-gray-300 cursor-pointer min-w-[90px]"
                >
                  <div className="text-xs font-semibold text-gray-900 mb-1">{day.day}</div>
                  <div className="text-sm font-bold text-gray-900">₹{day.price}</div>
                  <div className="text-xs text-gray-500 mt-1">{day.units} units</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}