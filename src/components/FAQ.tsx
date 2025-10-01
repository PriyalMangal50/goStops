import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Can I get an early check-in?',
      answer: 'Early check-in is subject to availability. Please contact the hostel in advance to check if early check-in can be arranged.'
    },
    {
      question: 'Is there food available in the hostel?',
      answer: 'We have a common kitchen area where guests can prepare their own meals. There are also many restaurants and food outlets nearby.'
    },
    {
      question: 'Are guests/outsiders allowed?',
      answer: 'For security reasons, visitors are not allowed in the dormitory areas. However, you can meet your guests in the common areas.'
    },
    {
      question: 'Are there events at the hostel?',
      answer: 'Yes! We regularly organize social events, city tours, and activities for our guests to connect and explore Bengaluru together.'
    },
    {
      question: 'Are there discounts for long stays?',
      answer: 'Yes, we offer special discounts for stays longer than 7 days. Please contact us directly for long-stay pricing.'
    },
    {
      question: 'Is Wi-Fi available?',
      answer: 'Yes, we provide free high-speed Wi-Fi throughout the property.'
    },
    {
      question: 'Do you have lockers for valuables?',
      answer: 'Yes, each bed comes with a personal locker. We recommend bringing your own padlock for added security.'
    },
    {
      question: 'Is the dorm safe?',
      answer: 'Safety is our top priority. We have 24/7 CCTV surveillance, secure access control, and our staff is always available.'
    },
    {
      question: 'Will my group/friends get the same dorm?',
      answer: 'We try our best to accommodate group bookings in the same dorm. Please mention your requirement at the time of booking.'
    },
    {
      question: 'Can I leave my luggage at the hostel after checkout until evening?',
      answer: 'Yes, we have luggage storage facilities available. You can safely store your bags after checkout.'
    },
    {
      question: 'Who do I contact if I have a query?',
      answer: 'You can reach out to our 24/7 front desk staff, or contact us via phone or email provided in your booking confirmation.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 border-t border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>

      <div className="space-y-3">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border border-gray-200 rounded-lg bg-white overflow-hidden">
            <button
              onClick={() => setOpenQuestion(openQuestion === idx ? null : idx)}
              className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors text-left"
            >
              <span className="font-medium text-gray-900">{faq.question}</span>
              <ChevronDown
                size={20}
                className={`text-gray-400 transition-transform flex-shrink-0 ml-4 ${openQuestion === idx ? 'rotate-180' : ''}`}
              />
            </button>
            {openQuestion === idx && (
              <div className="px-4 pb-4 pt-2 text-sm text-gray-700 border-t border-gray-100">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}