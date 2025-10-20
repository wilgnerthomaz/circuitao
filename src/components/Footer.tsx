import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

export function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <footer className="bg-[#006BA6] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Newsletter Signup */}
          <div>
            <h3 className="text-white mb-4">Siga-nos</h3>
            <p className="text-white/80 mb-4 text-sm">
              Receba notícias e novidades do Circuito das Águas
            </p>
            <form className="space-y-3">
              <Input
                type="text"
                placeholder="Digite seu nome"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Input
                type="email"
                placeholder="Digite seu e-mail"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
            </form>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-white mb-4">Entre em contato conosco</h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <Input
                type="text"
                placeholder="Digite seu nome"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                required
              />
              <Input
                type="email"
                placeholder="Digite seu e-mail"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                required
              />
              <Textarea
                placeholder="Mensagem"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 min-h-[100px]"
                required
              />
              <Button 
                type="submit"
                className="w-full bg-white text-[#006BA6] hover:bg-white/90"
              >
                Enviar
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-white mb-4">Associação do Circuito Turístico das Águas</h3>
            <div className="space-y-4 text-white/90 text-sm">
              <div className="flex gap-3">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <div>
                  <div className="mb-1">Endereço:</div>
                  <div>Praça Cônego José Caulino Moreira, s/n - Sala C - Caxambu/MG</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={20} className="flex-shrink-0" />
                <div>
                  <div className="mb-1">E-mail:</div>
                  <a 
                    href="mailto:circuitodasaguas.gestao@gmail.com"
                    className="hover:text-white transition-colors"
                  >
                    circuitodasaguas.gestao@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={20} className="flex-shrink-0" />
                <div>
                  <div className="mb-1">Telefone:</div>
                  <a 
                    href="tel:+553598027324"
                    className="hover:text-white transition-colors"
                  >
                    35 98027-7324
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-white mb-3">Centro de Informações Turísticas</h4>
              <div className="text-white/90 text-sm space-y-2">
                <div>Segunda a sexta: 8h às 17h</div>
                <div>Sábados: 9h às 13h</div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-8 pt-6 text-center text-white/70 text-sm">
          © 2025 Circuito das Águas. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
