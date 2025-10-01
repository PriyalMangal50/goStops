import { useState } from 'react';
import Navbar from './components/Navbar';
import NavigationTabs from './components/NavigationTabs';
import HeroSection from './components/HeroSection';
import RoomCard from './components/RoomCard';
import Summary from './components/Summary';
import DatePicker from './components/DatePicker';
import Amenities from './components/Amenities';
import GettingHere from './components/GettingHere';
import Guidelines from './components/Guidelines';
import FAQ from './components/FAQ';
import Gallery from './components/Gallery';

interface SelectedRoom {
  title: string;
  price: number;
  nights: number;
  quantity: number;
}

function App() {
  const [showGallery, setShowGallery] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<SelectedRoom | null>(null);

  const checkIn = '2025-10-29';
  const checkOut = '2025-10-30';
  const guests = 1;

  const rooms = [
    {
      title: 'Bed in 4 Bed Mixed AC Dormitory Room with Ensuite Bathroom',
      price: 517.86,
      originalPrice: 959,
      maxAdults: 1,
      image: '/images/44913_20250317071142_0217849001742195502_896_1.jpg',
      imageCount: 8,
      amenities: [
        'Shared or Ensuite Bathroom (As per room category reserved)',
        'Air Conditioned',
        'Free Breakfast (As per rate reserved)',
        'Vehicle on Hire (Extra Charges)',
        'Power Backup',
        'Pets Allowed (1 Pet Person in Private Rooms Only)'
      ]
    },
    {
      title: 'Deluxe Private AC Room with Ensuite Bathroom',
      price: 1423.98,
      originalPrice: 2637,
      maxAdults: 2,
      image: '/images/44913_20250317070818_0774822001742195298_951_1.jpg',
      imageCount: 7,
      amenities: [
        'Ensuite or Private Bathroom (As per room category reserved)',
        'Air Conditioned',
        'Free Breakfast (As per rate reserved)',
        'Vehicle on Hire (Extra Charges)',
        'Power Backup',
        'Pets Allowed'
      ]
    }
  ];

  const handleAddRoom = (room: SelectedRoom) => {
    setSelectedRoom(room);
  };

  const handleRemoveRoom = () => {
    setSelectedRoom(null);
  };

  if (showGallery) {
    return <Gallery onClose={() => setShowGallery(false)} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <HeroSection onGalleryClick={() => setShowGallery(true)} />
      <NavigationTabs />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8">
            <div id="rooms">
              <h2 className="text-[19px] md:text-[28px] leading-[27px] md:leading-[34px] text-black font-bold mb-[24px] md:mb-[32px]">Room types & Pricing</h2>
            {rooms.map((room, idx) => (
              <RoomCard
                key={idx}
                {...room}
                onAddRoom={handleAddRoom}
                checkIn={checkIn}
                checkOut={checkOut}
              />
            ))}
            </div>

            <div id="amenities" className="mt-16">
              <Amenities />
            </div>

            <div id="location" className="mt-16">
              <GettingHere />
            </div>

            <div id="guidelines" className="mt-16">
              <Guidelines />
            </div>

            <div id="faq" className="mt-16">
              <FAQ />
            </div>
          </div>
          <div className="md:col-span-4">
            <DatePicker checkIn={checkIn} checkOut={checkOut} guests={guests} />
            <Summary
              selectedRoom={selectedRoom}
              checkIn={checkIn}
              checkOut={checkOut}
              guests={guests}
              onRemoveRoom={handleRemoveRoom}
            />
          </div>
        </div>
      </div>

      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-400">© 2025 goSTOPS. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;