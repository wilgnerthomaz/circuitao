import { useState } from 'react';
import { MapPin, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

const events = [
  {
    id: 1,
    title: 'Conceição do Rio Verde 114 anos',
    location: 'Conceição do Rio Verde',
    date: 'De 27 a 31 de Agosto',
    image: 'https://images.unsplash.com/photo-1539964604210-db87088e0c2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVhdGVyJTIwcGVyZm9ybWFuY2UlMjBzdGFnZXxlbnwxfHx8fDE3NjA2OTI3NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 2,
    title: 'Festival de Inverno de Caxambu',
    location: 'Caxambu',
    date: 'De 15 a 20 de Julho',
    image: 'https://images.unsplash.com/photo-1598569642283-b6212ee48cc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5hcyUyMGdlcmFpcyUyMGxhbmRzY2FwZSUyMG1vdW50YWluc3xlbnwxfHx8fDE3NjA3ODg0OTh8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 3,
    title: 'Festa de São Sebastião',
    location: 'Baependi',
    date: 'De 10 a 20 de Janeiro',
    image: 'https://images.unsplash.com/photo-1544456808-7530b2d112df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3JpYyUyMGNodXJjaCUyMGJyYXppbCUyMGNvbG9uaWFsfGVufDF8fHx8MTc2MDc4ODQ5OHww&ixlib=rb-4.1.0&q=80&w=1080'
  }
];

export function CalendarSection() {
  const [currentEvent, setCurrentEvent] = useState(0);

  const nextEvent = () => {
    setCurrentEvent((prev) => (prev + 1) % events.length);
  };

  const prevEvent = () => {
    setCurrentEvent((prev) => (prev - 1 + events.length) % events.length);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-[#006BA6] mb-12 text-[24px] font-bold font-[Roboto]">
          Calendário do mês
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Event Image */}
            <div className="relative aspect-square md:aspect-auto md:h-full">
              <img 
                src={events[currentEvent].image}
                alt={events[currentEvent].title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Event Details */}
            <div className="p-8 space-y-6">
              <h3 className="text-[#006BA6] text-[18px] font-[Roboto]">
                {events[currentEvent].title}
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-700">
                  <MapPin size={20} className="text-[#006BA6]" />
                  <div>
                    <div className="text-sm text-gray-500 font-[Roboto]">Localização</div>
                    <div className="font-[Roboto]">{events[currentEvent].location}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-gray-700">
                  <Calendar size={20} className="text-[#006BA6]" />
                  <div>
                    <div className="text-sm text-gray-500 font-[Roboto]">Data</div>
                    <div className="font-[Roboto]">{events[currentEvent].date}</div>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-[#006BA6] hover:bg-[#005a8c]">
                Visualizar evento
              </Button>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={prevEvent}
              className="text-[#006BA6] hover:text-[#005a8c]"
              aria-label="Previous event"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="flex gap-2">
              {events.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentEvent(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentEvent
                      ? 'bg-[#006BA6] w-8'
                      : 'bg-gray-300'
                  }`}
                  aria-label={`Go to event ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextEvent}
              className="text-[#006BA6] hover:text-[#005a8c]"
              aria-label="Next event"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
