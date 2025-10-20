import { ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

export function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="text-[#006BA6]">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M20 5C15 5 10 10 10 15C10 20 15 25 20 35C25 25 30 20 30 15C30 10 25 5 20 5Z" fill="currentColor" opacity="0.3"/>
              <circle cx="20" cy="15" r="4" fill="currentColor"/>
              <path d="M8 20C8 20 10 22 12 22C14 22 16 20 16 20" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              <path d="M24 20C24 20 26 22 28 22C30 22 32 20 32 20" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            </svg>
          </div>
          <div>
            <div className="text-[#006BA6] leading-tight">
              <span className="text-xs">Circuito das</span>
            </div>
            <div className="text-[#006BA6]">
              <span>Águas</span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-[#006BA6] hover:text-[#005a8c] transition-colors font-[Roboto] font-bold">
            Início
          </a>
          <button className="text-[#006BA6] hover:text-[#005a8c] transition-colors flex items-center gap-1 font-[Roboto]">
            Cidades
            <ChevronDown size={16} />
          </button>
          <button className="text-[#006BA6] hover:text-[#005a8c] transition-colors flex items-center gap-1 font-[Roboto]">
            Experiências
            <ChevronDown size={16} />
          </button>
          <a href="#" className="text-[#006BA6] hover:text-[#005a8c] transition-colors font-[Roboto] font-bold">
            Agências de viagens
          </a>
          <a href="#" className="text-[#006BA6] hover:text-[#005a8c] transition-colors font-bold">
            Contato
          </a>
          <a href="#" className="text-[#006BA6] hover:text-[#005a8c] transition-colors font-bold">
            Transparência
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <Button variant="ghost" className="md:hidden">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M3 12h18M3 6h18M3 18h18" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </Button>
      </div>
    </header>
  );
}
