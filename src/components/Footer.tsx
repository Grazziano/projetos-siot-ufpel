import {
  Github,
  Globe,
  Heart,
  // Mail,
  Microscope,
  Pin,
  Rocket,
  University,
} from 'lucide-react';
import { memo } from 'react';

interface FooterProps {
  className?: string;
  showLinks?: boolean;
}

function Footer({ className = '', showLinks = true }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`bg-gray-900 text-white border-t border-gray-700 ${className}`}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="py-8 md:py-12">
          {/* Conteúdo principal */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
            {/* Texto descritivo */}
            <div className="md:col-span-8 lg:col-span-9">
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-4 font-light">
                Este conjunto de projetos representa o esforço contínuo da{' '}
                <span className="text-blue-400 font-medium">
                  Universidade Federal de Pelotas (UFPel)
                </span>{' '}
                em promover a inovação científica e tecnológica por meio da
                pesquisa aplicada em sistemas inteligentes e Internet das
                Coisas.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                <span className="bg-gray-800 px-3 py-1 rounded-full flex items-center">
                  <Rocket size={16} className="mr-2" /> Inovação Científica
                </span>
                <span className="bg-gray-800 px-3 py-1 rounded-full flex items-center">
                  <Microscope size={16} className="mr-2" /> Pesquisa Aplicada
                </span>
                <span className="bg-gray-800 px-3 py-1 rounded-full flex items-center">
                  <Globe size={16} className="mr-2" /> Internet das Coisas
                </span>
              </div>
            </div>

            {/* Links rápidos (opcional) */}
            {showLinks && (
              <div className="md:col-span-4 lg:col-span-3">
                <h3 className="font-semibold text-gray-300 mb-4 text-lg">
                  Links Rápidos
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="https://ufpel.edu.br"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm flex items-center gap-1"
                    >
                      <Globe size={16} /> Site Oficial UFPel
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/Grazziano/projetos-siot-ufpel"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm flex items-center gap-1"
                    >
                      <Github size={16} /> Repositórios GitHub
                    </a>
                  </li>
                  {/* <li>
                    <a
                      href="mailto:lups@ufpel.edu.br"
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm flex items-center gap-1"
                    >
                      <Mail size={16} /> Contato LUPS
                    </a>
                  </li> */}
                </ul>
              </div>
            )}
          </div>

          {/* Divisor */}
          <div className="border-t border-gray-700 my-6" />

          {/* Rodapé inferior */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {currentYear} Universidade Federal de Pelotas. Todos os
                direitos reservados.
              </p>
              <p className="text-gray-500 text-xs mt-1 flex items-center">
                Desenvolvido com <Heart size={16} className="mr-1 ml-1" /> por{' '}
                <a
                  href="https://github.com/Grazziano"
                  target="_blank"
                  className="text-blue-400 ml-1 hover:underline"
                >
                  G. B. Fagundes
                </a>
              </p>
            </div>

            {/* Informações de contato */}
            <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500">
              <span className="flex items-center">
                <Pin size={16} className="mr-1" /> Pelotas, RS - Brasil
              </span>
              <span className="flex items-center">
                <University size={16} className="mr-1" /> Centro de
                Desenvolvimento Tecnológico
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Efeito de gradiente sutil no fim */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-green-600 to-purple-600 opacity-60" />
    </footer>
  );
}

export default memo(Footer);
