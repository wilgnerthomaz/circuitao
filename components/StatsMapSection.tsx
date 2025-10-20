import { useState } from 'react';

const cities = [
  { name: 'TRÊS CORAÇÕES', x: '22%', y: '15%', link: '/cidade/tres-coracoes' },
  { name: 'CAXAMBU', x: '62%', y: '42%', link: '/cidade/caxambu' },
  { name: 'SÃO LOURENÇO', x: '54%', y: '55%', link: '/cidade/sao-lourenco' },
  { name: 'SOLEDADE DE MINAS', x: '70%', y: '48%', link: '/cidade/soledade-de-minas' },
  { name: 'BAEPENDI', x: '45%', y: '32%', link: '/cidade/baependi' },
  { name: 'CRUZÍLIA', x: '82%', y: '35%', link: '/cidade/cruzilia' },
  { name: 'CARMO DE MINAS', x: '48%', y: '58%', link: '/cidade/carmo-de-minas' },
  { name: 'LAMBARI', x: '40%', y: '50%', link: '/cidade/lambari' },
  { name: 'CAMBUQUIRA', x: '48%', y: '45%', link: '/cidade/cambuquira' },
  { name: 'CONCEIÇÃO DO RIO VERDE', x: '35%', y: '28%', link: '/cidade/conceicao-do-rio-verde' },
  { name: 'HELIODORA', x: '32%', y: '48%', link: '/cidade/heliodora' },
  { name: 'JESUÂNIA', x: '38%', y: '62%', link: '/cidade/jesuania' },
  { name: 'SÃO GONÇALO DO SAPUCAÍ', x: '55%', y: '20%', link: '/cidade/sao-goncalo-do-sapucai' },
  { name: 'PASSA-VINTE', x: '75%', y: '65%', link: '/cidade/passa-vinte' },
  { name: 'AIURUOCA', x: '78%', y: '78%', link: '/cidade/aiuruoca' }
];

export function StatsMapSection() {
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Statistics Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg shadow-md">
              <div className="text-5xl text-[#006BA6] mb-2 font-bold font-[Roboto]">15</div>
              <div className="text-[#006BA6] font-[Roboto]">Cidades</div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg shadow-md">
              <div className="text-5xl text-[#006BA6] mb-2 font-bold font-[Roboto]">37</div>
              <div className="text-[#006BA6] font-[Roboto]">Fontes de Água Mineral</div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg shadow-md">
              <div className="text-5xl text-[#006BA6] mb-2 font-[Roboto] font-bold">325</div>
              <div className="text-[#006BA6] font-[Roboto]">Anos de história</div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg shadow-md">
              <div className="text-5xl text-[#006BA6] mb-2 text-[48px] font-[Roboto] font-bold">267</div>
              <div className="text-[#006BA6] font-[Roboto]">Pontos turísticos</div>
            </div>
          </div>

          {/* Interactive Map */}
          <div className="relative">
            <div className="relative aspect-square bg-gradient-to-br from-[#006BA6] to-[#004d7a] rounded-lg p-8 shadow-xl">
              {/* SVG Map Outline */}
              <svg viewBox="0 0 400 400" className="w-full h-full">
                {/* Map region shape */}
                <path
                  d="M50,80 L120,50 L200,60 L280,80 L340,120 L360,200 L340,280 L300,340 L220,360 L140,340 L80,300 L50,220 Z"
                  fill="#005a8c"
                  stroke="#004d7a"
                  strokeWidth="2"
                  opacity="0.6"
                />
                
                {/* City markers */}
                {cities.map((city) => (
                  <g key={city.name}>
                    <circle
                      cx={city.x}
                      cy={city.y}
                      r={hoveredCity === city.name ? '8' : '6'}
                      fill="white"
                      stroke="#006BA6"
                      strokeWidth="2"
                      className="cursor-pointer transition-all"
                      onMouseEnter={() => setHoveredCity(city.name)}
                      onMouseLeave={() => setHoveredCity(null)}
                      onClick={() => window.location.href = city.link}
                    />
                    {hoveredCity === city.name && (
                      <text
                        x={city.x}
                        y={`calc(${city.y} - 12)`}
                        textAnchor="middle"
                        fill="white"
                        fontSize="10"
                        className="pointer-events-none"
                      >
                        {city.name}
                      </text>
                    )}
                  </g>
                ))}
              </svg>

              {/* City labels overlay */}
              <div className="absolute inset-0 pointer-events-none">
                {cities.slice(0, 6).map((city) => (
                  <div
                    key={city.name}
                    className="absolute text-white text-xs"
                    style={{ left: city.x, top: city.y, transform: 'translate(-50%, -150%)' }}
                  >
                    {city.name.split(' ')[0]}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
