import { X } from 'lucide-react';

interface SummaryProps {
  selectedRoom: {
    title: string;
    price: number;
    nights: number;
    quantity: number;
  } | null;
  checkIn: string;
  checkOut: string;
  guests: number;
  onRemoveRoom?: () => void;
}

export default function Summary({ selectedRoom, checkIn, checkOut, guests, onRemoveRoom }: SummaryProps) {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return `${date.getDate()} ${date.toLocaleString('default', { month: 'short' })}`;
  };

  const basePrice = selectedRoom ? selectedRoom.price * selectedRoom.nights * selectedRoom.quantity : 0;
  const discount = basePrice * 0.4;
  const couponDiscount = basePrice * 0.06;
  const taxes = (basePrice - discount - couponDiscount) * 0.045;
  const totalPrice = basePrice - discount - couponDiscount + taxes;

  return (
    <div className="sticky top-20">
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        {!selectedRoom ? (
          <>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Summary</h3>
            <div className="flex flex-col items-center justify-center py-12">
              <div className="w-24 h-24 rounded-full overflow-hidden flex items-center justify-center mb-4" style={{ backgroundColor: '#ffe6ef' }}>
                <img 
                  src="/images/SummarY.webp" 
                  alt="Hotel Room" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <span className="text-4xl hidden">🛏️</span>
              </div>
              <p className="text-gray-500 text-center text-sm">
                Select a bed to get your stay summary here.
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="text-sm text-gray-700 mb-4">
              <div className="font-semibold">
                {formatDate(checkIn)} - {formatDate(checkOut)} ({selectedRoom.nights} night{selectedRoom.nights > 1 ? 's' : ''})
              </div>
              <div className="text-gray-600">{guests} guest{guests > 1 ? 's' : ''}</div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4 border-b pb-3">Summary</h3>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="text-sm font-semibold text-gray-900">
                    {selectedRoom.title}
                  </div>
                  <div className="text-xs text-gray-600 mt-1">
                    {selectedRoom.quantity} Bed{selectedRoom.quantity > 1 ? 's' : ''} x {selectedRoom.nights} Night{selectedRoom.nights > 1 ? 's' : ''}
                  </div>
                </div>
                {onRemoveRoom && (
                  <button
                    onClick={onRemoveRoom}
                    className="flex items-center justify-center w-6 h-6 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
                    title="Remove room"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>

              <div className="flex justify-between text-sm text-gray-600">
                <span>
                  ₹{selectedRoom.price} x {selectedRoom.quantity} Bed{selectedRoom.quantity > 1 ? 's' : ''} x {selectedRoom.nights} Night{selectedRoom.nights > 1 ? 's' : ''}
                </span>
              </div>

              <div className="flex justify-between text-sm pt-2 border-t">
                <span className="text-gray-900">Base price</span>
                <span className="font-semibold">₹{basePrice.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gray-900 flex items-center">
                  Gostops Discount
                  <span className="ml-1">🔥</span>
                </span>
                <span className="font-semibold" style={{ color: '#ff1a53' }}>- ₹{discount.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gray-900">Coupon Discount</span>
                <span className="font-semibold" style={{ color: '#ff1a53' }}>- ₹{couponDiscount.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gray-900">Taxes</span>
                <span className="font-semibold text-green-600">+ ₹{taxes.toFixed(2)}</span>
              </div>
            </div>

            <div className="border-t pt-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-gray-900">Total price</span>
                <span className="text-2xl font-bold text-gray-900">₹{totalPrice.toFixed(2)}</span>
              </div>
            </div>

            <button className="w-full py-3 text-white rounded-lg font-semibold hover:opacity-90 transition-colors" style={{ backgroundColor: '#ff1a53' }}>
              Proceed to Book
            </button>
          </>
        )}
      </div>
    </div>
  );
}