import {
  Github,
  Globe,
  Heart,
  Microscope,
  Pin,
  Rocket,
  University,
  ExternalLink,
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
      className={`bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-200/50 dark:border-gray-700/50 shadow-lg ${className}`}
    >
      {/* Barra decorativa superior */}
      <div className="relative h-1.5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-green-600 opacity-90 animate-gradient-x" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="py-10 md:py-14 lg:py-16">
          {/* Conteúdo principal */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 mb-10">
            {/* Texto descritivo */}
            <div className="md:col-span-8 lg:col-span-9">
              <p className="text-base md:text-lg lg:text-xl dark:text-gray-200 text-gray-800 leading-relaxed mb-6 font-light">
                Este conjunto de projetos representa o esforço contínuo da{' '}
                <span className="font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                  Universidade Federal de Pelotas (UFPel)
                </span>{' '}
                em promover a inovação científica e tecnológica por meio da
                pesquisa aplicada em sistemas inteligentes e Internet das
                Coisas.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <span className="group relative bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium border border-blue-200/50 dark:border-blue-800/50 hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                  <Rocket
                    size={18}
                    className="text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform"
                  />
                  <span>Inovação Científica</span>
                </span>
                <span className="group relative bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium border border-indigo-200/50 dark:border-indigo-800/50 hover:border-indigo-400 dark:hover:border-indigo-600 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                  <Microscope
                    size={18}
                    className="text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform"
                  />
                  <span>Pesquisa Aplicada</span>
                </span>
                <span className="group relative bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium border border-purple-200/50 dark:border-purple-800/50 hover:border-purple-400 dark:hover:border-purple-600 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                  <Globe
                    size={18}
                    className="text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform"
                  />
                  <span>Internet das Coisas</span>
                </span>
              </div>
            </div>

            {/* Links rápidos (opcional) */}
            {showLinks && (
              <div className="md:col-span-4 lg:col-span-3">
                <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-5 text-lg md:text-xl flex items-center gap-2">
                  <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full" />
                  Links Rápidos
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="https://ufpel.edu.br"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 text-sm flex items-center gap-2 hover:gap-3 font-medium"
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
                        <Globe
                          size={16}
                          className="text-blue-600 dark:text-blue-400"
                        />
                      </div>
                      <span>Site Oficial UFPel</span>
                      <ExternalLink
                        size={14}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/Grazziano/projetos-siot-ufpel"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 text-sm flex items-center gap-2 hover:gap-3 font-medium"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-colors">
                        <Github
                          size={16}
                          className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                        />
                      </div>
                      <span>Repositórios GitHub</span>
                      <ExternalLink
                        size={14}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Divisor */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="bg-white dark:bg-gray-900 px-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
                  <University className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Rodapé inferior */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left space-y-2">
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                © {currentYear} Universidade Federal de Pelotas. Todos os
                direitos reservados.
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-xs flex items-center justify-center md:justify-start gap-1.5">
                Desenvolvido com{' '}
                <Heart size={14} className="text-red-500 animate-pulse" /> por{' '}
                <a
                  href="https://github.com/Grazziano"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium hover:underline transition-colors inline-flex items-center gap-1"
                >
                  G. B. Fagundes
                  <ExternalLink size={12} />
                </a>
              </p>
            </div>

            {/* Informações de contato */}
            <div className="flex flex-wrap justify-center md:justify-end gap-4 text-xs text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
                <Pin size={14} className="text-blue-600 dark:text-blue-400" />
                <span>Pelotas, RS - Brasil</span>
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
                <University
                  size={14}
                  className="text-indigo-600 dark:text-indigo-400"
                />
                <span>Centro de Desenvolvimento Tecnológico</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);
